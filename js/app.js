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


// new last session
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
//get the input field and button elements

//console.log(taskInput.value);

//callback function to log the input value after 10 seconds
// setTimeout(function(){
//     console.log(taskInput.value);
// }, 10000);


//console.log(addButton);

// console.log(taskContainer);
//add event listener to the button
// addButton.addEventListener( 'click', function(){
//     // console.log(taskInput.value);
//     if (taskInput.value.trim() === '') {
//         // console.log(taskInput.getAttribute('placeholder'));
//         taskInput.setAttribute('placeholder', 'Please enter a task');
//         taskInput.classList.add('error');
//         return;
//     }
//     tasks.push(taskInput.value);
//     console.log(tasks);
//     //create a new task element
//     const taskElement = document.createElement('li');
//     const taskCompleted = document.createElement('button');
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'X';
//     removeButton.className = 'remove-btn';
//     taskCompleted.textContent = 'Complete';
//     // console.log(taskCompleted);
//     taskElement.textContent = taskInput.value;
//     taskCompleted.className = 'complete-btn';
//     taskElement.appendChild(taskCompleted);
//     taskElement.className = 'task-item';
//     taskContainer.appendChild(taskElement);
//     //complete task functionality
//     taskCompleted.addEventListener('click', function() {
//         taskElement.classList.toggle('completed');
//     });
//     //remove task functionality
//     removeButton.addEventListener('click', function() {
//         taskContainer.removeChild(taskElement);
//     });
//     taskElement.appendChild(removeButton);
//     //clear input field after adding task
//     // taskInput.value = '';
// })
/*----------------------------------new approach--------------------------------   */
// const taskInput = document.getElementById('task-input');
// const addButton = document.getElementById('add-task-btn');
// const taskContainer = document.getElementById('task-list');
// // declare a var to store tasks
// let tasks = [];

// // function to add event listeners to buttons
// // function addEventsToButtons(button, funcToBeExecuted) {
// //     button.addEventListener('click', funcToBeExecuted);
// // }

// // function to create a new task element
// function addTask() {
//     console.log(taskInput.value);
//     if (taskInput.value.trim() === '') {
//         taskInput.setAttribute('placeholder', 'Please enter a task');
//         taskInput.classList.add('error');
//         return;
//     }
//     taskContainer.innerHTML = ''; // clear the task container
//     // let task = {
//     //     id: Date.now(),
//     //     content: taskInput.value,
//     //     completed: false
//     // };
//     tasks.push(new Task(Date.now(), taskInput.value, false, 'delayed'));
//     console.log(tasks);
//     // for(task of tasks) {    
//     //     const taskElement = elementCreation('li', 'task-item', task.content);   
//     //     appendTask(taskContainer, taskElement);
//     // }
//     // filter tasks to only show active tasks
//     const activeTasks = tasks.filter(task => task.state === 'active' && !task.completed);
//     const delayedTasks = tasks.filter(task => task.state === 'delayed')
//     console.log(activeTasks);
//     console.log(delayedTasks);
//     const delayedTasksElement = document.getElementById('filter-delayed');
//     const activeTasksElement = document.getElementById('filter-active');
//     delayedTasksElement.addEventListener('click', function() {
//         taskContainer.innerHTML = ''; // clear the task container    
//         for(task of delayedTasks) {
//             const taskElement = elementCreation('li', 'task-item', task.content);
//             appendTask(taskContainer, taskElement);
//         }
//     });
//     activeTasksElement.addEventListener('click', function() {
//         taskContainer.innerHTML = ''; // clear the task container
//         for(task of activeTasks) {
//             const taskElement = elementCreation('li', 'task-item', task.content);
//             appendTask(taskContainer, taskElement);
//         }
//     });


//     // create a new task element
//     // const taskElement = elementCreation('li', 'task-item', taskInput.value);
//     // const taskCompleted = elementCreation('button', 'complete-btn', 'Complete');
//     // const removeButton = elementCreation('button', 'remove-btn', 'X');

    
//     // add functionality to complete task
//     // addEventsToButtons(taskCompleted, addCompleted(taskElement));
//     // add functionality to remove task
//     //addEventsToButtons(removeButton, addRemove(taskContainer, taskElement));
//         // append the task completed and remove buttons to the task element
//     // appendTask(taskElement, taskCompleted);
//     // appendTask(taskElement, removeButton);
//     // appendTask(taskContainer, taskElement);

// }
// //call addEventsToButtons to add click event to the add button
// addEventsToButtons(addButton, addTask);

// function elementCreation(element, className, text) {
//     const newElement = document.createElement(element);
//     newElement.className = className;
//     newElement.textContent = text;
//     console.log(newElement);
//     return newElement;
// }

// // elementCreation('li', 'task-item', 'New Task');

// // function to append a task to the task container
// function appendTask(container, taskElement) {
//     container.appendChild(taskElement);
// }

// // appendTask(taskContainer, elementCreation('li', 'task-item', 'New Task'));

// function addCompleted(element) {
//         element.classList.toggle('completed');
//     }

// function addRemove(container,element) {
//         container.removeChild(element);
//     }

// function Task(id, content, completed, state) {
//     this.id = id;
//     this.content = content;
//     this.completed = completed;
//     this.state = state;
// }


// //higher order function
// const animals = ['cat', 'dog', 'fish', 'bird'];
// const dangerousAnimals = animals.filter(function(animal){
//     if (animal === 'cat') {
//         return animal;
//     }
// });

// // requests
// const request = new XMLHttpRequest();
// // console.log(request);
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// // request methods
// // request.open('POST', 'https://jsonplaceholder.typicode.com/posts');
// // request.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1');
// // request.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');

// // status codes
// // 200: OK
// // 201: Created
// // 204: No Content
// // 400: Bad Request
// // 404: Not Found
// // 500: Internal Server Error

// // request.send();
// // request.onload = function() {
// //     const data = JSON.parse(request.responseText);
// //     // console.log(request.responseText);
// //     // console.log(data);
// //     for(item of data) {
// //         //console.log(item.title);
// //         const postElement = elementCreation('li', 'task-item', item.title);
// //         appendTask(taskContainer, postElement);
// //     }
// // }


const newsApiKey = 'c1dec5b2b0324bf28b17733de5da28ed';
const newApiEndpoint = 'https://newsapi.org/v2/top-headlines?';
const country = 'us';
const category = 'technology';
const container = document.getElementById('mn');
const newsRequest = new XMLHttpRequest();
console.log(newsRequest);
newsRequest.open('GET', `${newApiEndpoint}country=${country}&category=${category}&apiKey=${newsApiKey}`);
newsRequest.send();
newsRequest.onload = function() {
    const data = JSON.parse(newsRequest.responseText);
    console.log(data);
    for(article of data.articles) {
        console.log(article);

const fragment = document.createElement('div');
console.log(fragment);
fragment.innerHTML = `<article id="news-article">
            <h3 id="article-title">${article.title?article.title:'No title'}</h3>
            <p id="article-author">${article.author?article.author:'Mohammed'}</p>
            <img id="article-image" src="${article.urlToImage}" alt="Article Image">
            <p id="article-description">${article.description}</p>
            <a id="article-link" href="${article.url}" target="_blank">Read more</a>
        </article>`
        container.appendChild(fragment);
    }
}

// fetch api
fetch(`${newApiEndpoint}country=${country}&category=${category}&apiKey=${newsApiKey}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        // for (article of data.articles) {
        //     console.log(article);
        //     const fragment = document.createElement('div');
        //     console.log(fragment);
        //     fragment.innerHTML = `<article id="news-article">
        //     <h3 id="article-title">${article.title?article.title:'No title'}</h3>
        //     <p id="article-author">${article.author?article.author:'Mohammed'}</p>
        //     <img id="article-image" src="${article.urlToImage}" alt="Article Image">
        //     <p id="article-description">${article.description}</p>
        //     <a id="article-link" href="${article.url}" target="_blank">Read more</a>
        // </article>`
        //     container.appendChild(fragment);
        }
)
    .catch(error => console.error('Error fetching news articles:', error));
