console.log("javascript is connected!");

// const buttonClick = () =>{

// console.log("buttonClickisRun");
// };
let todoList = [];
let renderElement = document.getElementById("render_element");
// var isChecked = false;
var defaultId = 0;

function buttonClick() {
  var generatingId = createID();
  var task = document.getElementById("inputText").value;
  var valueElement = document.createElement("span");
  var divElemnt = document.createElement("div");
  var displayList = document.getElementById("render_element");
  var deleteButton = document.createElement("button");
  let userObj = { task: task, id: generatingId, isChecked: false };

  // b = input.value;
  console.log("ButtonisCLICK!");

  todoList.push(userObj);

  console.log(task);
  console.log(todoList);

  //render elements
  valueElement.innerText = task;
  renderElement.appendChild(valueElement);
  valueElement.setAttribute("id", generatingId);
  // displayList.appendChild(divElemnt);

  deleteButton.innerText = "Delete";
  renderElement.appendChild(deleteButton);
  // deleteButton.setAttribute("id", generatingId);

  deleteButton.addEventListener("click", function () {
    deleteFromList();

    console.log("The id for this task is " + generatingId);
  });
  // document.body.appendChild(deleteButton);

  // console.log(deleteButton);
  //delete button
}

//render TodoList Display
// function displayTodoList() {
//   console.log("displayTodoList is called");
//   const list = document.querySelector(".js-todo-list");
//   const isChecked = todo.checked ? "done" : "";
//   const node = document.createElement("li");
//   node.setAttribute("class", `todo-item ${isChecked}`);
//   node.setAttribute("data-key", todo.id);

//   node.innerHTML = `
//     <input id="${todo.id}" type="checkbox"/>
//     <label for="${todo.id}" class="tick js-tick"></label>
//     <span>${todo.text}</span>
//     <button class="delete-todo js-delete-todo">
//     <svg><use href="#delete-icon"></use></svg>
//     </button>
//   `;

//   list.append(node);
// }

//Delete from Array todoList

function deleteFromList() {
  console.log("deleteButtonClick");
  var getID = document.getElementById("taskisSet").getAttribute("id").value;

  console.log(getID + " deleted");
}

function myFunction() {
  var x = document.getElementById("inputText").value;
  document.getElementById("demo").innerHTML = x;
}

var createID = () => {
  var uniqID = "id" + Math.random().toString(16).slice(2);

  console.log("the id for this task is " + uniqID);
  return uniqID;
};
// const lalaa = () =>{

//     const input = document.getElementById('nameText').value;
//     console.log(input);
// }
