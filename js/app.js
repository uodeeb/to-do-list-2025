/*
------------------------------Project Plan------------------------------
- Project Name: Taskido
- Description: A simple To-Do List application to manage tasks.
- Technologies Used: HTML, CSS, JavaScript
- Features:
    1. Add tasks with description.
    2. Display tasks in a list.
    3. Mark tasks as completed.
    4. Delete tasks.
* Steps:
    1. Create the HTML structure.
    2. Style the application using CSS.
    3. Implement the JavaScript functionality.

*/

//declare variables
const taskInput = document.getElementById('task-input');
//console.log(taskInput.value);

//callback function to log the input value after 10 seconds
// setTimeout(function(){
//     console.log(taskInput.value);
// }, 10000);

const addButton = document.getElementById('add-task-btn');
//console.log(addButton);
const taskContainer = document.getElementById('task-list');
console.log(taskContainer);
//add event listener to the button
addButton.addEventListener( 'click', function(){
    console.log(taskInput.value);
    //create a new task element
    const taskElement = document.createElement('li');
    const taskCompleted = document.createElement('button');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'remove-btn';
    taskCompleted.textContent = 'Complete';
    console.log(taskCompleted);
    taskElement.textContent = taskInput.value;
    taskCompleted.className = 'complete-btn';
    taskElement.appendChild(taskCompleted);
    taskElement.className = 'task-item';
    taskContainer.appendChild(taskElement);
    //complete task functionality
    taskCompleted.addEventListener('click', function() {
        taskElement.classList.toggle('completed');
    });
    //remove task functionality
    removeButton.addEventListener('click', function() {
        taskContainer.removeChild(taskElement);
    });
    taskElement.appendChild(removeButton);
    //clear input field after adding task
    // taskInput.value = '';
})