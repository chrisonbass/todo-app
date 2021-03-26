function mainApp(){
  /**
   * Builds DOM elements given a type, props, and children
   * @param type : type (i.e. div, span, li, a, p, etc)
   * @param props : object of DOM props
   * @param children : must be in the form of an array
   * @returns {*}
   */
  var create = function(type, props, children){
    var element = document.createElement(type);
    if (props) {
      for( var propName in props ){
        element[propName] = props[propName];
      }
    }
    if (Array.isArray(children)){
      children.forEach(function(child){
        var childNode = ["string", "number"].indexOf(typeof child) >= 0 ?
          document.createTextNode(child) : child;
        element.appendChild(childNode);
      });
    }
    return element;
  };

  // Form used to Add to the list
  var todoForm = document.getElementById("todo-form");

  // <ul> used to display list
  var todoList = document.getElementById("todo-list");

  // <li> used to convey that list is empty
  // (only display in list when list is empty)
  var noItemsListItem = create("li", {className: "empty-list"}, [
    create("span", null, ["Nothing to do"])
  ]);

  // list starts out empty
  todoList.appendChild(noItemsListItem);

  // Add Submit Listener to Add Form
  //  - creates new entry in list
  //  - adds delete listener to new list item
  todoForm.addEventListener("submit", function(formEvent){
    formEvent.preventDefault();
    var entryText = formEvent.target['todo-entry'].value.trim();
    // don't add empty items
    if (!entryText){
      return;
    }

    var newEntry = create("li", null, [
      // Label created from value of input
      create("span", null, [entryText]),
      // Delete Entry Link
      create("button", {
        type: "button",
        className: "delete-button",
        onclick: function(deleteEvent){
          deleteEvent.preventDefault();
          var className = newEntry.className + " removing";
          newEntry.className = className.trim();
          setTimeout(function(){
            todoList.removeChild(newEntry);
            if (!todoList.childNodes.length) {
              todoList.appendChild(noItemsListItem);
            }
          }, 250);
        }
      }, [
        create("span", {className: "icon trash"}),
        " Delete"
      ])
    ]);

    todoList.appendChild(newEntry);

    // reset entry input to blank
    todoForm['todo-entry'].value = "";

    // Remove "No items list item"
    if (Array.prototype.indexOf.call(todoList.childNodes, noItemsListItem) >= 0){
      todoList.removeChild(noItemsListItem);
    }
  });
}

mainApp();
