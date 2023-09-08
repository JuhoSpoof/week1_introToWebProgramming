const myButton = document.getElementById("my-button");
const h1Text = document.getElementById("h1-text");

myButton.addEventListener("click", function () {
  console.log("hello world");
  h1Text.innerText = "Moi maailma";
});

const addDataButton = document.getElementById("add-data");

addDataButton.addEventListener("click", function () {
  const list = document.getElementById("my-list");
  let newLi = document.createElement("li");

  //newLi.innerText = "new List item";
  //list.appendChild(newLi);

  newLi.innerText = document.getElementById("textarea").value;

  list.appendChild(newLi);
});
