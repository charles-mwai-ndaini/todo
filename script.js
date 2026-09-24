const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("TaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (taskInput.value === "") {
        alert("You must write something my BOYY!");
    } else {
        const newTask = document.createElement("li");
        const editInnerText = taskInput.value;
        newTask.innerText = taskInput.value;
        taskList.appendChild(newTask);
				taskInput.value = "";

        const cancelButton = document.createElement("button");
        cancelButton.innerText = "X";
        cancelButton.className = "cancel-button";
        newTask.appendChild(cancelButton);
        cancelButton.addEventListener("click", function() {
            taskList.removeChild(newTask);
        });

        const tickButton = document.createElement("button");
        tickButton.innerText = "✔";
        tickButton.className = "tick-button";
        newTask.appendChild(tickButton);
        tickButton.addEventListener("click", function() {
            newTask.classList.toggle("completed");
        });

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.className = "edit-button";
        newTask.appendChild(editButton);
        editButton.addEventListener("click", function() {
            taskInput.value = editInnerText;
            taskInput.focus();
            taskList.removeChild(newTask);
        });
    }
});
