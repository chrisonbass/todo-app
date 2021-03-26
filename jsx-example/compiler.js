const fs = require("fs");
const browserify = require("browserify");
const watch = [1, "1", true].indexOf(process.env.WATCH) >= 0;
const IDLE = 'idle';
const RUNNING = 'running';

let buildStates = {
  js: IDLE,
  assets: IDLE
};

const bundle = () => {
  if (buildStates.js === RUNNING){
    return;
  }
  console.log("STARTED: Bundling");
  buildStates.js = RUNNING;
  let res = browserify("./src/index.js")
  .transform("babelify")
  .bundle()
  .pipe(fs.createWriteStream("./dist/script.js").on('finish', () => {
    console.log("FINISHED: Bundling");
    buildStates.js = IDLE;
  }));
}

const moveAssets = () => {
  if (buildStates.assets === RUNNING) {
    return;
  }
  buildStates.assets = RUNNING;
  console.log("STARTED: Copying Assets");
  let files = [
    ['./src/assets/index.html', './dist/index.html'],
    ['./src/assets/styles.css', './dist/styles.css'],
  ];
  let index = 0;
  const run = () => {
    if (index === files.length) {
      console.log("FINISHED: Copying Assets");
      buildStates.assets = IDLE;
      return;
    }
    let src = files[index];
    fs.copyFile(src[0], src[1], () => {
      if (index < files.length) {
        index += 1;
        run();
      }
    })
  }
  run();
}

if (watch) {
  const handler = function(eventType, fileName) {
    if (eventType === "change" && fileName.match(/\.js/)) {
      bundle();
    }
    if (eventType === "change" && fileName.match(/\.(html|css)/)) {
      moveAssets();
    }
  };
  fs.watch('./src', {
    recursive: true
  },handler);
}

bundle();
moveAssets();
