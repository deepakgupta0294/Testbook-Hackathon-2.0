// All the Required Ids are Targetted
// All the Required Variables are Created

let task_array = [];
let read_task = '';
const data_input = document.getElementById('data_input');
const add_btn = document.getElementById('add_btn');
const TaskDisplay = document.getElementById('Task_Display');
let edit_index = null;
const EditedTask_Submit = document.getElementById('submit');
const Cancel_button = document.getElementById('cancel');
const Edited_input = document.getElementById('edit_task');
const header = document.getElementById('head');
const task_data = document.getElementById('tasks_data');

// Edit Menu Hidden Until Edit Button is Pressed
const EditBox = document.getElementById('EditBox');
EditBox.style.display = "none";

let object_str = localStorage.getItem('task');
//console.log(task_array);
if (object_str != null) {
    task_array = JSON.parse(object_str);
}

ShowTask();

// Adding the Task in the Tasks List

add_btn.addEventListener('click', adding)
function adding() {
    const task = data_input.value;
    if (task == '') alert('Please Enter a Task...')
    else {
        task_array.push({ 'task': task });
        SaveTask(task_array);
        data_input.value = '';
        ShowTask();
    }

}

// Function to Save the Task Array Data in Local Storage 
// So that Browser can restain it even after being Refreshed

function SaveTask(task_array) {
    let str = JSON.stringify(task_array);
    localStorage.setItem('task', str);
}

// Funtion to Display Tasks List

function ShowTask() {
    let TaskInfo = '';
    task_array.forEach((info, index) => {
        TaskInfo +=
        `
        <tr>
        <td><span id="items">${info.task}</span></td>
        <td><span id="tools"> 
                 <button id="check" onclick='ReadTask(${index})'><i class="fa-solid fa-check" ></i></button>
                 <button id="edit" onclick='EditTask(${index})'><i class="fa-regular fa-pen-to-square" ></i></button>
                 <button id="del" onclick='DeleteTask(${index})'><i class="fa-solid fa-trash-can" ></i> </button>  
                 </span></td>
        </tr>

        `
    });

    TaskDisplay.innerHTML = TaskInfo;

}

// Funtion to Mark the Task as Read

function ReadTask(id) {

    read_task = task_array[id].task;
    read_task = read_task.strike();
    task_array[id].task = read_task;
    SaveTask(task_array);
    ShowTask();
}

// Function to Edit a Task

function EditTask(id) {

    header.style.display = "none";
    task_data.style.display = "none";
    EditBox.style.display = "block";
    edit_index = id;
    Edited_input.value = task_array[id].task;

    EditedTask_Submit.addEventListener('click',
        function () {
            if(Edited_input.value==''){ alert('Please Enter Task..') }
            else{
            task_array[id].task = Edited_input.value;
            SaveTask(task_array);
            ShowTask();
            header.style.display = "block";
            task_data.style.display = "block";
            EditBox.style.display = "none";
        }             
        });

    Cancel_button.addEventListener('click',
        function () {
            EditBox.style.display = "none";
            ShowTask();
        });


}

// Function to Delete a Task

function DeleteTask(id) {

    task_array.splice(id, 1);
    SaveTask(task_array);
    ShowTask();

}