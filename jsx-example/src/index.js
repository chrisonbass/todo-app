import parseJSX from "./parseJSX";
import ListItem from "./comps/ListItem";
import EmptyListItem from "./comps/EmptyListItem";

function mainApp(){
  // Form used to Add to the list
  const todoForm = document.getElementById("todo-form");

  // <ul> used to display list
  const todoList = document.getElementById("todo-list");

  // list starts out empty
  const noItemsListItem = <EmptyListItem />;
  todoList.appendChild(noItemsListItem);

  // Add Submit Listener to Add Form
  //  - creates new entry in list
  //  - adds delete listener to new list item
  todoForm.addEventListener("submit", function(formEvent){
    formEvent.preventDefault();
    const entryText = formEvent.target['todo-entry'].value.trim();
    // don't add empty items
    if (!entryText){
      return;
    }
    const newEntry = (
      <ListItem
        text={entryText}
        onDelete={(deleteEvent) => {
          deleteEvent.preventDefault();
          let className = newEntry.className + " removing";
          newEntry.className = className.trim();
          setTimeout(function(){
            todoList.removeChild(newEntry);
            if (!todoList.childNodes.length) {
              todoList.appendChild(noItemsListItem);
            }
          }, 250);
        }}
      />
    );
    todoList.appendChild(newEntry);
    todoForm['todo-entry'].value = "";
    if (Array.prototype.indexOf.call(todoList.childNodes, noItemsListItem) >= 0){
      todoList.removeChild(noItemsListItem);
    }
  });
}

mainApp();
