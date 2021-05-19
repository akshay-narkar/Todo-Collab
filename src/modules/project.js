import {addToLocalStorage, addSelectedProject} from './localStorage'

const projectInput = document.getElementById('new_project_input');
const projectForm = document.getElementById('project_form');
const projectList = document.getElementById('data-projects');
const defaultProject = document.getElementById('data-default-project'); 
const taskTitle = document.getElementById('task_title');
const taskCounter = document.getElementById('task_count');
const taskList = document.getElementById('task_list');
const taskDiv = document.getElementById('task_body');
const taskContainer = document.getElementById('tasks');
const taskForm = document.getElementById('task_form');
const addTaskBtn = document.getElementById('new_task_button');
const cancelTaskBtn = document.getElementById('cancel_task_button');
const taskInput = document.getElementById('new_task_input');
const dueDate = document.getElementById('date');
const priority = document.getElementById('priority_dropdown');

 let listOfProjects = [];

 let selectedProjectId;

// The default project is active when clicked
defaultProject.addEventListener('click', (e) =>{
    e.target.classList.add('active');
    taskTitle.textContent = "Default Project";

    taskCounter.textContent = null;
})

// Project form
projectForm.addEventListener('submit', (e) =>{
    e.preventDefault();  
    
    if(projectInput.value === null || projectInput.value === '') return;
    
    const project = projectItem(projectInput.value);
    projectInput.value = null;
    
    listOfProjects.push(project);
    
    addToLocalStorage(listOfProjects);
    addSelectedProject(selectedProjectId);
    
    create();
    })

// Task form
taskForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    e.target.style.display = 'none';
    addTaskBtn.style.display = 'block';

const taskName = taskInput.value;
if(taskName == null || taskName === '') return;

const task = taskItem(taskName);

taskInput.value = '';

const selectedProject = listOfProjects.find(project => project.id === selectedProjectId);
selectedProject.tasks.push(task);

addToLocalStorage(listOfProjects);
addSelectedProject(selectedProjectId);

e.target.reset();
})

// Create a project
const projectItem = (item) =>{
    return {id: Date.now().toString(), item: item, tasks: []};
}

//Create project item/task
const taskItem = (item) =>{
    return {id: Date.now().toString(), item: item, date: dueDate.value, priority: priority.value, complete: false};
}

// Create projects
const createProject = () =>{
    listOfProjects.forEach( project =>{
        const newProject = document.createElement('li');
        newProject.setAttribute('data-key', project.id);
        newProject.classList.add('new_project');
        newProject.innerHTML = `${project.item} <button class="delete_project text-white bg-danger btn"><i class="fas fa-trash-alt"></i></button><br /><br />`;

        if(project.id === selectedProjectId){
            newProject.classList.add('active');
            defaultProject.classList.remove('active');
        }
        projectList.appendChild(newProject);
    })
}

// Create tasks
const createTasks = () =>{
const selectedProject = listOfProjects.find(project => project.id === selectedProjectId);

    if(selectedProjectId){
    taskTitle.textContent = selectedProject.item;
    createTaskCount(selectedProject);

    selectedProject.tasks.forEach(task =>{
        const taskCheckBox = document.createElement('input');
        taskCheckBox.setAttribute('type', 'checkbox');
        taskCheckBox.setAttribute('class', 'check_box');
        taskCheckBox.id = task.id;
        taskCheckBox.checked = task.complete;
        const taskLabel = document.createElement('label');
        taskLabel.className = 'my-3 w-50'
        taskLabel.htmlFor = task.id;
        
        taskLabel.innerHTML= `<span class="font-weight-bold">Task Descrition:</span> ${task.item}<br/>
        <span class="font-weight-bold">Task Date:</span> ${task.date}<br/> 
        <span class="font-weight-bold">Task Priority:</span> ${task.priority}`
        
        taskLabel.appendChild(taskCheckBox);
        taskDiv.appendChild(taskLabel);
        taskList.appendChild(taskDiv);
     });
}
};

// Create a task count
const createTaskCount = (selectedProject) =>{
    const incompleteTasks = selectedProject.tasks.filter(task => { return !task.complete}).length;
    let taskMessage = '';
    if(incompleteTasks ===1){
         taskMessage = 'task';
    }else {
        taskMessage = 'tasks';
    }
    
    taskCounter.textContent = `${incompleteTasks} ${taskMessage} remaining`;
}

// Clear projects
const clearProject = (element) =>{
    while (element.childNodes[2]){
        element.removeChild(element.childNodes[2]);
    }
}

// Clear tasks
const clearTask = (element) =>{
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

// select project list
projectList.addEventListener('click', (e) =>{
    selectedProjectId = e.target.getAttribute('data-key');
    addSelectedProject(selectedProjectId)

    if(e.target.classList.contains('delete_project')){
        deleteProject(e.target.parentElement.getAttribute('data-key'))
        defaultProject.classList.add('active');
    }
})

// Task list checkbox addEventListener
taskList.addEventListener('click', (e) =>{
    if (e.target.tagName.toLowerCase() === 'input'){
        const selectedProject = listOfProjects.find(project => project.id === selectedProjectId);
        const selectedTask = selectedProject.tasks.find(task => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        addToLocalStorage(listOfProjects);
        addSelectedProject(selectedProjectId);
        createTaskCount(selectedProject);
    }
})

// Delete project
const deleteProject = (id) =>{
    listOfProjects = listOfProjects.filter(project =>{
        return project.id !== id;
    })

    taskTitle.textContent = "Select or Create a new project";
    taskCounter.textContent = null;
    addToLocalStorage(listOfProjects);
}

// Add new task button
addTaskBtn.addEventListener('click', (e) =>{
    e.target.style.display = 'none';
    taskForm.style.display = 'block';
    taskContainer.appendChild(taskList);
})

// Cancel task button
cancelTaskBtn.addEventListener('click', () =>{
    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'block';
    taskForm.reset();
})

const create = () =>{
    clearProject(projectList);
    clearTask(taskDiv);
    createProject();
    createTasks();
}

const getFromLocalStorage = () =>{
    const reference = localStorage.getItem('listOfProjects');
    const selected = localStorage.getItem('selectedProjectId');
    
    if(reference){
        listOfProjects = JSON.parse(reference);
        create();
    }

    if(selected){
        selectedProjectId = JSON.parse(selected);
        create();
    }
}

getFromLocalStorage();

export default create;