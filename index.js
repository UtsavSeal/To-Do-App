let thingsToDo =  [];

let userInput = document.querySelector('#todo');
let addInput = document.getElementById('add');
let deleteInput = document.getElementById('delete');
let list = document.getElementById('list'); 

let succesAud = new Audio('./sounds/success.mp3');
let doneAud = new Audio('./sounds/clear.mp3');
let pressAud = new Audio('./sounds/pressed.mp3');
let wrongAud = new Audio('./sounds/error.mp3');

addInput.addEventListener('click', function(e){
    e.preventDefault();
    if(userInput.value !== ''){
        thingsToDo.push(userInput.value);
        userInput.value = '';
        console.log(thingsToDo);
        let listItem = document.createElement('li');
        listItem.setAttribute('class', 'item');
        listItem.appendChild(document.createTextNode(thingsToDo[thingsToDo.length - 1]));
        list.appendChild(listItem);
        succesAud.cloneNode().play();
        // Adding the event listener of the list item
        listItem.addEventListener('click' , (e) => {
           listItem.classList.toggle('done');
           pressAud.cloneNode().play();
        });
    }
    else{
        wrongAud.cloneNode().play();
        alert('Please enter a task');
    }
});

deleteInput.addEventListener('click' , (e) => {
    e.preventDefault();
    if(thingsToDo.length !== 0){
        thingsToDo.pop(thingsToDo.length - 1);
        console.log(thingsToDo);
        list.removeChild(list.lastElementChild);
        doneAud.cloneNode().play();
    }
    else{
        wrongAud.cloneNode().play();
        alert('Nothing to delete');
    }
});

item.addEventListener('click' , (e) => {
    alert("Please work");
});