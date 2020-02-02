/* Module Assignment 2
Level 1

Question 1
Refer: lesson 1
Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. The function should console log your name. */

const myFunctionExpression = function() {
  console.log("Peder");
};




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

<input class="input" id="firstName"/> */

const input = document.querySelector("#firstName");

input.addEventListener("keydown", callKeyDown);
function callKeyDown(event) {
  console.log(event.key);
}


/* Question 4
Refer: lesson 2 / 3
Select the button in the HTML below by its tag. Add a mouseover event listener. The callback function should add a class called hover to the button.

<button class="btn" data-animal="dog">Hover over me</button> */

const button = document.querySelector("button");

function callOnHover() {
  button.classList.add("hover");
}

button.addEventListener("mouseover", callOnHover);


/* Question 5
Refer: lesson 2 / 3
Select the button in the HTML below by its data attribute and add a mouseout event listener to it. The callback function should remove the class called hover from the button.

<button class="btn hover" data-animal="dog">Hover over me</button> */

const button = document.querySelector("[data-animal='dog']");

function callMouseOut() {
  button.classList.remove("hover");
}

button.addEventListener("mouseout", callMouseOut);


/* Question 6
Refer: lesson 3
Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.

The callback function should log the value of the data attribute on each element when the cursor moves over it.  */

/* <ul>
    <li data-animal="goose">Animal 1</li>
    <li data-animal="frog">Animal 2</li>
    <li data-animal="elephant">Animal 3</li>
</ul>  */

const li = document.querySelectorAll("li");

for(let i = 0; i < li.length; i++){
  li[i].addEventListener("mouseover", function(event) {
console.dir(event.target.dataset.animal) 
  });
}









/* Question 7
Refer: lesson 3
Convert the if-else-if statement below to a switch statement. Use the code inside the else block in the default block in the switch.
*/

const animal = "cow";

switch (animal) {
  case "cat":
console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph")
}

/* Question 8
Refer: lesson 4
Convert the for loop code below to a forEach loop. */

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheepName) {
  console.log(sheepName);
});


/* Question 9
Refer: lesson 4
Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times. */

function logTime() {

    console.log("hello");

  
    if(counter === 6) {
        clearInterval(intervalId);
    }
    counter++;

}

let counter = 1;

const intervalId = setInterval(logTime, 500);




/* Question 10
Refer: lesson 4
Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. You can use either innerText or innerHTML to update the text. 
*/

/* <div class="container">Placeholder text</div>  */

const container_div = document.querySelector(".container");

function updateDiv() {
    container_div.innerText = "Text updated"
}
setTimeout(updateDiv, 2000);




