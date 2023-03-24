console.log("javascript is connected!");

// const buttonClick = () =>{

// console.log("buttonClickisRun");
// };
let array = ['test'];
let renderElement = document.getElementById('render_element');


function buttonClick(){
    
    const input = document.getElementById('nameText').value;
    // b = input.value;
    console.log("ButtonisCLICK!");
    console.log(input);
    array.push(input);
    console.log(array);


//render elements
    var divElemnt = document.createElement('div');
    var valueElement = document.createElement('span');
    valueElement.innerText = input;
console.log(valueElement);
    renderElement.appendChild(valueElement);



    var list = document.getElementById('render_element');
    list.appendChild(divElemnt);
}

// const lalaa = () =>{

//     const input = document.getElementById('nameText').value;
//     console.log(input);
// }