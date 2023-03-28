console.log("javascript is connected!");

let todoList = [];
let renderElement = document.getElementById("render_element");
let isChecked = false;

var defaultId = 0;

function buttonClick() {
  var generatingId = createID();
  var getTaskId = document.getElementById("inputText").value;
  var valueElement = document.createElement("span");
  const divElemnt = document.createElement("li");
  var checkbox = document.createElement("input");
  var deleteButton = document.createElement("i");
  var timeInput = Date.now();
  // var todoStatus = userObj.isChecked;
  let userObj = { task: getTaskId, id: generatingId, isChecked: false };

  console.log("ButtonisCLICK!");

  todoList.push(userObj);
  // console.log(todoStatus);
  console.log(getTaskId);
  console.log(todoList);

  //render elements
  renderElement.appendChild(divElemnt);
  divElemnt.appendChild(checkbox);
  divElemnt.appendChild(valueElement);
  divElemnt.appendChild(deleteButton);
  deleteButton.setAttribute("id", "delete");
  deleteButton.setAttribute("class", "fa-solid fa-trash");
  divElemnt.setAttribute("class", "listDiv");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");

  // Event Listener for each button
  checkbox.addEventListener("click", function () {
    if (isChecked === false) {
      // isChecked = true;
      console.log("isChecked = True!");
    } else if (isChecked === true) {
      isChecked = false;
      console.log("isChecked = False!");
    }
  });
  deleteButton.addEventListener("click", function () {
    divElemnt.remove();
    todoList.splice(divElemnt, 1);
    console.log(todoList);
    // deleteFromList();

    // renderElement.appendChild(checkbox);
    // renderElement.appendChild(valueElement);
    // console.log("The id for this task is " + generatingId);
  });

  valueElement.innerText = getTaskId;
  valueElement.setAttribute("class", "taskList");

  document.getElementById("inputText").value = "";
}

//Delete from Array todolist
function deleteFromList() {
  console.log("deleteButtonClick");
  divElemnt.remove();
  todoList.splice();
  // var getID = document.getElementById("taskisSet").getAttribute("id").value;

  // console.log(getID + " deleted");
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

// const deleteButton = document.createElement("button");
// deleteButton.id = "todo-delete";
// const deleteIcon = document.createElement("i");
// deleteIcon.className = "fa fa-trash";
// deleteButton.addEventListener("click", function () {
//   listItem.remove();
//   el_array.splice(i, 1);
//   localStorage.setItem("todos", JSON.stringify(el_array));
// });
// deleteButton.appendChild(deleteIcon);
// todoItem.appendChild(deleteButton);
