const inputBox = document.getElementById("input-box");
const listdo = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("نسيت تضيف المهام ي بطل!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listdo.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
}

listdo.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData (){
    localStorage.setItem("data", listdo.innerHTML );
}
function showTask(){
    listdo.innerHTML = localStorage.getItem("data");
}
showTask();