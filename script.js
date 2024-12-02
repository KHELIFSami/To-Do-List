const box = document.getElementById("box");
const listItem = document.getElementById("listItem");
let resultat = [];
let tasksHTML = "";

displayData();
Display();

function addTask() {

    // si le champs est vide n9olo 3amre din yemeh
    if (box.value === "") {
        alert("invalide input!");
        return
    }

    //hna j'ajoute la tache f le array
    else {
        const task = { id: resultat.length + 1, content: box.value, checked: false };
        resultat.push(task);
        box.value = "";
        saveData();
        Display();
    }
}


function Display() {
    tasksHTML = "";
    resultat.forEach(task => {
        tasksHTML += `<li id= ${task.id} class= "task-item"  onclick= checked(${task.id})> 
                <span class="${task.checked ? "checked" : ""}">${task.content}</span> 
                <button class="delete-btn" onclick= Delete(${task.id}) > Delete </button>
                </li> `;
    });
    listItem.innerHTML = tasksHTML;
    saveData();
}

function checked(id) {
    // Mettre à jour l'état checked de la tâche
    resultat.forEach(task => {
        if (task.id === id) {
            task.checked = !task.checked;
        }
    });
    saveData();
    Display();

}

function Delete(id) {
    resultat = resultat.filter(task => task.id !== id);
    saveData();
    Display();
}

function saveData(){
    localStorage.setItem("data", JSON.stringify(resultat));
}

function displayData(){
    resultat = JSON.parse(localStorage.getItem("data")) || [];
}

displayData();