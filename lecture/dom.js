// Get an element by the Tag Name
const heading = document.getElementsByTagName("h1");
const button = document.getElementsByTagName("button");
const list = document.querySelectorAll(".groceries li");

// To access to the first heading
const myHeading = Array.from(heading)[0];
const myButton = Array.from(button)[0];

// To list all the attributes / values (or properties) in the console
// console.dir(myHeading);

// Change the content of the element
myHeading.innerHTML = "This heading has been updated with JavaScript.";

// Execute a function that will run 'n' amount of time
setInterval(function() {
  if (myButton.style.backgroundColor === "red") {
    myButton.style.backgroundColor = "#3b81d8";
  } else {
    myButton.style.backgroundColor = "red";
  }
}, 500);

// Execute a function that will run once: setTimeout()
// Create a new element
// Append it to the body or to another element
// setTimeout(function() {
//   const myParagraph = document.createElement("p");
//   myParagraph.innerHTML =
//     "Irure Lorem commodo dolor ipsum aliqua ullamco aliquip cillum occaecat ut. Voluptate culpa esse proident eiusmod occaecat consequat non. Minim eiusmod do dolore excepteur cillum anim voluptate sunt sint ex. Aliqua amet proident laborum velit aliquip laborum qui sunt. Ea ad laboris non enim enim dolore et ad ad. Irure voluptate deserunt deserunt velit pariatur aliqua ipsum.";
//   document.body.appendChild(myParagraph);
// }, 1500);

// Create an image and put it on the page
// setTimeout(function() {
//   const myImage = document.createElement("img");
//   myImage.style.height = "250px";
//   myImage.src =
//     "https://images.unsplash.com/photo-1553424713-55a8239f28aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80";
//   // document.body.appendChild(myImage);
//   document.querySelector(".intro").appendChild(myImage);
// }, 500);

// Function that logs all the elements of the Array
list.forEach(item => console.log(item.innerText));

setInterval(function() {
  const nextItem = document.querySelector("li.not-purchased");
  if (!nextItem) return; // break the function if no items are met anymore

  nextItem.classList.replace("not-purchased", "purchased");
}, 500);

// classList.value.contains("purchased")
// classList.add()
// classList.remove()
// classList.toggle()
// classList.replace()
// classList.value()
