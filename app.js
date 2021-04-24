const text = document.querySelector("textarea");
const button = document.querySelector("button");
const drop = document.querySelectorAll(".drop");
const start = document.querySelector(".start");

let id = 0;
let allTasks;

button.onclick = function() {
    if (text.value == "") alert("Список задач пустой");
    else {
        id++;
        let p = document.createElement("p");
        p.setAttribute("id", id);
        p.draggable = "true"
        p.innerHTML += `
        Задача #${id} : ${text.value}
        <img src = "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-256.png" id=${id} style="width:20px;">`
        p.style.textAlign = "center"
        start.appendChild(p);
        text.value = "";

        let deleteImg = p.querySelector("img");
        deleteImg.onclick = function() {
            if (deleteImg.id == p.id) p.style.display = "none";
        }

        allTasks = start.querySelectorAll("p");

        for (let i = 0; i < allTasks.length; i++) {
            allTasks[i].ondragstart = function(event) {
                event.dataTransfer.setData("text", event.target.id);
            }
        }

    }
}

for (let i = 0; i < drop.length; i++) {
    drop[i].ondragover = function(event) {
        event.preventDefault()
    }
    drop[i].ondrop = function(event) {
        event.preventDefault()
        let id = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(id));
    }
}