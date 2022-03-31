
// add the id associated with you html
/*toDOList
inputItem
addItem
completeItem
completeAll
modifyItem
deleteItem
todo-list */

let toDoList = document.querySelector("#toDoList");

let inputItem = document.querySelector("#inputItem");
let addItem = document.querySelector("#addItem");
let completeItem = document.querySelector("#completeItem");
let completeAll = document.querySelector("#completeAll");
let modifyItem = document.querySelector("#modifyItem");
let deleteItem = document.querySelector("#deleteItem");
let todoList = document.querySelector("#todo-list");
let todoListItem = document.querySelector("#todo-list div");

/************************************************************************************************
 * first lets start off by creating the backbone of the application. Start with being able to add
 * an item by creating a new element.
 * 	
 * createElement method creates a new HTML element within DOM. When calling the method,  you have
   to provide a tag name that defines the type of element we create. var element = document.createElement(tagName[, options]);
   tagName can be any of the HTML tags you know, like p, div, span,... (read more about HTML tags). 
   Parameter options is optional, it enables us to set an is attribute when adding an element.
 *************************************************************************************************/

//step 1 create an event listener that will allow the user to add/submit a task.
addItem.value = "Add Item";

toDoList.addEventListener("submit", function (event) {
	event.preventDefault();
	let userTask = inputItem.value;
	const addTask = document.createElement("div");
	addTask.innerText = userTask; 

//innerText returns all text contained by an element and all its child elements.  
//It is used mostly in the web pages to generate the dynamic html such as registration form, comment form, links etc.

//Step 2 Now that the user submitted a task. That task now needs to be be appended 
/* If(condition){if condition is true perform this} Else if { if this condition is true execute this}
 * Create a if condition that will take any input and appendChild - This can easily be accomplished by coding !== "" (It is not an empty string)
 If there is nothing submitted, this listener will not work obviously. But what should happen of on once an item 
 it should get immediately added to my to do list by appending a DIV child by adding that task as an element to the HTML. One that happens, "click functionality" should begin to work.
 * after each submission the submission box should be reset
 * should I have the the submission box cleared? Or let the history remain? Probably leave it just in case something has to be reeentered.*/

	addTask.addEventListener("click", function () {
		// logigically I would want this first, however when I put 
		// this if statement first it did not work, but once reversed it did. 
		// if (userTask !== "") {             
		// 	todoList.appendChild(addTask); }

		if (addTask.style.textDecoration === "") {
			 addTask.style.textDecoration = "line-through";
		} else {
			addTask.style.textDecoration = "";
		}
	});

	if (userTask !== "") {             
		todoList.appendChild(addTask); }

		toDoList.reset();
});
//This method is also used to move an element from one element to another element. It is used for creating a 
//new element with some text then first create the text as the text node and then append it to the element, then append the element to the document.
	 

/************************************************************************************************
Now that we have the functionality required to add items to the application. Now we must be able to 
modify, and delete.
(1) add button names (done)
(2)create a bolean that modify and delete task (done)
(3)create event listeners that will modify and delete (done)
 *************************************************************************************************/

deleteItem.value = "Delete Item";
let deleteTask = false;

deleteItem.addEventListener("click", function () {
	deleteTask = true;
});



modifyItem.value = "Modify Item";
let modifyTask = false;

modifyItem.addEventListener("click", function () {
	modifyTask = true;
});


todoList.addEventListener("click", function (event) {
	if (deleteTask === true) {
		event.target.remove();
		deleteTask = false;
	}

	if (modifyTask === true) {
		const edit = prompt("Enter Edit:");
		event.target.innerHTML = edit;
		event.target.style.textDecoration = "";
		modifyTask = false;
	}
});




/************************************************************************************************
Now that we have the functionality required to modify and delete. Now we must be able to 
complete.
(1) add button names (done)
(2)create event listeners to compplete items
(3)
 *************************************************************************************************/


completeItem.value = "Complete Task";

completeItem.addEventListener("click", function () {
	const todoList = document.querySelectorAll("#todo-list div");

	for (let i = 0; i < todoList.length; i++) {
		const task = todoList[i];
		if (task.style.textDecoration === "line-through") {
			task.remove();
		}
	}
	// THIS WHILE LOOP DID NOT WORK!!!!
	// let i = 0;
	// while(i < toDoList.length){
	// 	const task = toDoList[i];
	// 	if (task.style.textDecoration === "line-through"){
	// 		task.remove
	// 	}
	// }
});



	











