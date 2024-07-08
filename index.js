"use strict";

const listc = document.querySelector(".list-container");
const checked = document.querySelector(".checked");
const button = document.querySelector(".button");
const text = document.querySelector("#input-box");

button.addEventListener("click", function () {
  const task = text.value;
  console.log(task);
  if (!task) {
    alert("You write something");
  } else {
    const html = `<li class="done">${task}
    <span class="close">\u00d7</span>
    </li>`;
    console.log(listc);
    listc.insertAdjacentHTML("beforeend", html);
  }
  text.value = "";
  saveData();
});

listc.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listc.innerHTML);
}
function clearData() {
  localStorage.clear();
}
function showdata() {
  listc.innerHTML = localStorage.getItem("data");
}
showdata();

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const task = text.value;
    console.log(task);
    if (!task) {
      alert("You write something");
    } else {
      const html = `<li class="done">${task}
    <span class="close">\u00d7</span>
    </li>`;
      console.log(listc);
      listc.insertAdjacentHTML("beforeend", html);
    }
    text.value = "";
    saveData();
  }
  if (e.key === "Delete") {
    listc.innerHTML = " ";
    clearData();
  }
});
