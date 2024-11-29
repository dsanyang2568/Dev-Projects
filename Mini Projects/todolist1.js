function addTodo() {  
  const todoElement = document.getElementById("new-todo");
  const todo = todoElement.value;
  todoElement.value = "";
  if (todo.length < 3) {
    return alert("You must have at least 3 characters for your todo item.");
  }
  const listElement = document.getElementById("list");
  const listItem = document.createElement("li");
  const text = document.createTextNode(todo);
  listItem.appendChild(text);

  listElement.appendChild(listItem);
  
  listItem.setAttribute("onclick", "this.remove()");
}



