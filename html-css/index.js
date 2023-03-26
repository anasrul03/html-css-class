console.log("javascript is connected!");

// const buttonClick = () =>{

// console.log("buttonClickisRun");
// };
let todoList = [];
let renderElement = document.getElementById("render_element");

function buttonClick() {
  const input = document.getElementById("inputText").value;
  // b = input.value;
  console.log("ButtonisCLICK!");
  console.log(input);
  todoList.push(input);
  console.log(todoList);

  //render elements
  var valueElement = document.createElement("span");
  valueElement.innerText = input;
  renderElement.appendChild(valueElement);
  console.log(valueElement);

  var divElemnt = document.createElement("div");
  var displayList = document.getElementById("render_element");
  displayList.appendChild(divElemnt);
}

function myFunction() {
  var x = document.getElementById("inputText").value;
  document.getElementById("demo").innerHTML = x;
}
// const lalaa = () =>{

//     const input = document.getElementById('nameText').value;
//     console.log(input);
// }
