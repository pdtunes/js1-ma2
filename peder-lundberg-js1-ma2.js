/* Module Assignment 2
Level 1

Question 1
Refer: lesson 1
Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. The function should console log your name. */

const myFunctionExpression = function() {
  console.log("Peder");
};

myFunctionExpression();

/* Question 2
Refer: lesson 2
The HTML in this question has been updated as it was causing a conflict with quesion 4. It doesn't have any effect on the required JavaScript.
Select the input in the HTML below by its class. Add a click event listener. The callback function passed to the event listener should log the sentence I was clicked.
You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.*/

/* <input type="button" class="btn" value="Click me">  */

const button = document.querySelector(".btn");

button.addEventListener("click", updateButton);
function updateButton() {
  console.log("It was clicked");
}


/* Question 3
Refer: lesson 2
Select the input in the HTML below by its id. Add a keydown event listener. The callback function passed to the event listener should log the value of the key that was pressed.

<input class="input" id="firstName"></div> */



/* Question 4
Refer: lesson 2 / 3
Select the button in the HTML below by its tag. Add a mouseover event listener. The callback function should add a class called hover to the button.

<button class="btn" data-animal="dog">Hover over me</button> */

const button = document.querySelector(".btn");

function callOnHover() {
    console.log("The cursor moved over the button");
};

button.addEventListener("mouseover", callOnHover);



/* Question 5
Refer: lesson 2 / 3
Select the button in the HTML below by its data attribute and add a mouseout event listener to it. The callback function should remove the class called hover from the button.

<button class="btn" data-animal="dog">Hover over me</button> */

const button = document.querySelector(".btn");

function callMouseOut() {
    console.log("The cursor moved away from the button");
};

button.addEventListener("mouseout", callMouseOut);


/* Question 6
Refer: lesson 3
Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.

The callback function should log the value of the data attribute on each element when the cursor moves over it.

<ul>
    <li data-animal="goose">Animal 1</li>
    <li data-animal="frog">Animal 2</li>
    <li data-animal="elephant">Animal 3</li>
</ul> */