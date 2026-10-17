let body = document.body;
let main = document.createElement("main");
let todo = document.createElement("div");
todo.classList.add("toDo");
body.append(main);
main.append(todo);
let h1 = document.createElement("h1");
todo.append(h1);
h1.textContent = "My ToDo List";

let addTask = document.createElement("div");
addTask.classList.add("addTask");
todo.append(addTask);

let input = document.createElement("input");
input.type = "text";
input.placeholder = "write a task...";
input.setAttribute("id", "addInput");
let addBtn = document.createElement("button");
addTask.append(input, addBtn);
addBtn.textContent = "Add Task";
addBtn.setAttribute("id", "addTask");

// taskDiv
let taskDiv = document.createElement("div");
taskDiv.classList.add("taskDiv");
main.appendChild(taskDiv);

addBtn.addEventListener("click", function () {
  let inpValue = input.value;
  if (inpValue) {
    taskDiv.innerHTML += `<div class="liItems">
    <p>${inpValue.trim()}</p>
    <div class="addDelTBn">
        <button class="edit">edit</button>
        <button class="del">delete</button>
    </div>
</div>`;
    input.value = "";
  }

  //   delete functionality
  let delBtn = document.querySelectorAll(".del");
  delBtn.forEach(function (del) {
    del.addEventListener("click", function () {
      let liItems = del.parentElement.parentElement;
      liItems.setAttribute("class", "hidden");
    });
  });

  // EDIT FUNCTIONALITY
  let editBtn = document.querySelectorAll(".edit");
  editBtn.forEach(function (edit) {
    edit.addEventListener("click", function () {
      let liItems = edit.parentElement.parentElement;
      let para = liItems.querySelector("p");
      let newPara = prompt('Enter the changes:',inpValue);
      para.textContent = newPara
    });
  });
});
