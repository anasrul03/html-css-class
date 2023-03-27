console.log("javascript is connected!");

let todoList = [];
let renderElement = document.getElementById("render_element");

var defaultId = 0;

function buttonClick() {
  var generatingId = createID();
  var task = document.getElementById("inputText").value;
  var valueElement = document.createElement("span");
  var divElemnt = document.createElement("div");
  var checkbox = document.createElement("input");
  var deleteButton = document.createElement("button");
  var input = document
    .createElement("input")
    .setAttribute("class", "fa-solid fa-trash");
  let userObj = { task: task, id: generatingId, isChecked: false };

  // b = input.value;
  console.log("ButtonisCLICK!");

  todoList.push(userObj);

  console.log(task);
  console.log(todoList);

  //render elements
  renderElement.appendChild(divElemnt);
  divElemnt.appendChild(checkbox);
  divElemnt.appendChild(valueElement);
  divElemnt.appendChild(deleteButton);
  divElemnt.setAttribute("class", "listDiv");
  // renderElement.appendChild(checkbox);
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  valueElement.innerText = task;
  // renderElement.appendChild(valueElement);

  valueElement.setAttribute("class", "taskList");

  console.log(input);

  deleteButton.setAttribute("class", "deleteButton");

  deleteButton.addEventListener("click", function () {
    deleteFromList();

    console.log("The id for this task is " + generatingId);
  });

  document.getElementById("inputText").value = "";
}

//Delete from Array todolist
function deleteFromList() {
  console.log("deleteButtonClick");
  var getID = document.getElementById("taskisSet").getAttribute("id").value;

  console.log(getID + " deleted");
}

// function myFunction() {
//   var x = document.getElementById("inputText").value;
//   document.getElementById("demo").innerHTML = x;
// }

//Generate Unique ID Function
var createID = () => {
  var uniqID = "id" + Math.random().toString(16).slice(2);

  console.log("the id for this task is " + uniqID);
  return uniqID;
};

//clear input
function clearInput(task) {
  if (task.value == "clear input") {
    task.value = "";
  }
}
