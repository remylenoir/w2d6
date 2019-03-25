const headings = document.getElementsByTagName("h1");
const myHeading = Array.from(headings)[0];

const introDiv = document.querySelector(".intro");

const buttons = document.getElementsByTagName("button");
const myButton = buttons[0];

console.dir(myButton);

// setInterval(function() {
//     if (myButton.style.backgroundColor === 'yellow') {
//         myButton.style.backgroundColor = 'red'
//     } else {
//         myButton.style.backgroundColor = 'yellow'
//     }
// }, 100)

// setTimeout(function() {
//     // const myParagraph = document.createElement('p')
//     // myParagraph.innerHTML = 'Hello there, please accept our cookie policy'
//     // myParagraph.classList.add('paragraph-primary')
//     // document.body.appendChild(myParagraph)

//     const myImg = document.createElement('img')
//     myImg.style.width = '500px'
//     myImg.src =
//         'https://images.unsplash.com/photo-1553424713-55a8239f28aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
//     document.querySelector('.intro').appendChild(myImg)
// }, 1500)

// display all groceries
// const listItems = document.querySelectorAll('ul.groceries li')
// listItems.forEach(function(listItem) {
//     console.log(listItem.innerText)
// })

setInterval(function() {
  const nextItem = document.querySelector("li");
  if (!nextItem) return;
  // nextItem.classList.toggle('purchased')
  // nextItem.classList.replace('not-purchased', 'purchased')
  // console.log('nextItem :', nextItem.classList)
  // classList.value.includes('purchased')
  // classList.add()
  // classList.remove()
  // classList.toggle()
  // classList.value
}, 2000);

// document.querySelector('button').addEventListener('click', evt => {
//     const nextItem = document.querySelector('li.not-purchased')
//     if (!nextItem) return
//     nextItem.classList.replace('not-purchased', 'purchased')
// })

document.querySelectorAll(".groceries li").forEach(function(listItem) {
  listItem.addEventListener("click", evt => {
    evt.target.classList.toggle("purchased");
  });
});

document.querySelector("button").addEventListener("click", evt => {
  const newItemText = document.querySelector("#groceries-input").value;
  if (
    Array.from(document.querySelectorAll(".groceries li")).find(listItem => {
      if (listItem.innerHTML.toLowerCase().trim() === newItemText.toLowerCase().trim()) return true;
    })
  ) {
    return;
  }

  const newItem = document.createElement("li");
  newItem.addEventListener("click", evt => {
    evt.target.classList.toggle("purchased");
  });
  newItem.innerHTML = newItemText;
  newItem.classList.add("not-purchased");
  document.querySelector("ul.groceries").prepend(newItem);
  document.querySelector("#groceries-input").value = "";
});
