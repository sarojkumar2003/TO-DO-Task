const inputBox = document.getElementById("input-box");
const listContaier = document.getElementById("list-cntainer");

function addTask( ) {
  if (inputBox.value === '') {
    alert("You Must Write Something!!")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContaier.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = ''
  saveDate(); 
}

listContaier.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveDate(); 
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDate(); 
  }
});


function saveDate() {
  localStorage.setItem("data", listContaier.innerHTML)
}

function showTask() {
  listContaier.innerHTML = localStorage.getItem("data")
}
showTask();