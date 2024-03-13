const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);           // The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);   //Note: If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position.
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();    //it will remove parent i.e. 'li' element
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();