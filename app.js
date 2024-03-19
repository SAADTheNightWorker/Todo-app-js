const input = document.getElementById("input");
const ul = document.getElementById("ul");

function clickHandler() {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    var text = document.createTextNode(input.value);
    ul.appendChild(li);
    li.appendChild(text);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showData() {
  if (localStorage.getItem("data")) {
    ul.innerHTML = localStorage.getItem("data");
  }
}

showData();
