const listform = document.querySelector('#list-display');
const editform = document.querySelector('#edit-form-display');
const listname = document.querySelector('#defaultlist');
const formdisplay = document.querySelector('#form-display');
const list = document.getElementById('list');
const readRadios1 = document.querySelectorAll('.radiobtn');
const task = document.querySelector('#task');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
export const readRadios1edit = document.querySelectorAll('.radiobtnedit');
export const taskedit = document.getElementById('taskedit');
export const descriptionedit = document.getElementById('descriptionedit');
export const dateedit = document.getElementById('dateedit');

export const localstorage1 = () => {
  let liststasks = [];
  if (localStorage.getItem('liststore')) {
    liststasks = JSON.parse(localStorage.liststore);
  }
  return liststasks;
};

function reload(e){
 e.preventDefault();
  window.location.reload();
}

export const deletetasklogic = (i, remove, listtasks) => {
  listtasks[i].todos.splice(remove, 1);
};

export const checkboxfalse = (listtasks, i, remove) => {
  listtasks[i].todos[remove].status = false;
};

export const checkboxtrue = (listtasks, i, remove) => {
  listtasks[i].todos[remove].status = true;
};

export class Createlist1 {
  constructor(list) {
    this.list = list;
    this.todos = [];
  }
}

export function Createtask1(date, task, description, readradiovalue1, status) {
  this.date = date;
  this.task = task;
  this.description = description;
  this.priority = readradiovalue1;
  this.status = status;
}



export const createlist = (e) => {
  const liststasks = localstorage1();
  const list1 = new Createlist1(list.value);
  liststasks.push(list1);
  localStorage.setItem('liststore', JSON.stringify(liststasks));
 reload(e)
};

export function edittaskform(e=false) {
  const listtasks = localstorage1();
  if (localStorage.getItem('selectedlist')) {
    let readradiovalue2;
    for (let i = 0; i < 3; i += 1) {
      if (readRadios1edit[i].checked === true) {
        readradiovalue2 = readRadios1edit[i].value;
        break;
      }
    }

    const selecteditem = localStorage.getItem('selectedlist');

    for (let i = 0; i < listtasks.length; i += 1) {
      if (listtasks[i].list === selecteditem) {
        const remove = localStorage.getItem('selectedtask');
        listtasks[i].todos[remove].task = taskedit.value;
        listtasks[i].todos[remove].date = dateedit.value;
        listtasks[i].todos[remove].description = descriptionedit.value;
        listtasks[i].todos[remove].priority = readradiovalue2;
        localStorage.setItem('liststore', JSON.stringify(listtasks));
        break;
      }
    }
    // dom1.dom();
  }
 reload(e)
}

export const createtask = (e) => {
  const listtasks = localstorage1();
  if (localStorage.getItem('selectedlist')) {
    let readradiovalue1;
    for (let i = 0; i < 3; i += 1) {
      if (readRadios1[i].checked === true) {
        readradiovalue1 = readRadios1[i].value;
        break;
      }
    }

    const tasks = new Createtask1(date.value, task.value, description.value,
      readradiovalue1, false);

    for (let i = 0; i < listtasks.length; i += 1) {
      const selectedlist = localStorage.getItem('selectedlist');

      if (listtasks[i].list === selectedlist) {
        listtasks[i].todos.push(tasks);
        localStorage.setItem('liststore', JSON.stringify(listtasks));
        break;
      }
    }

 reload(e)
  }
};

export const logic = (dom1) => {
  const liststasks = [];
  if (!localStorage.getItem('liststore')) {
    const listdefault = new Createlist1(listname.textContent);
    liststasks.push(listdefault);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
  }

  listform.addEventListener('submit', createlist);
  formdisplay.addEventListener('submit', createtask);
  editform.addEventListener('submit', (e) => { edittaskform(dom1, e),dom1.dom(); });
  formdisplay.reset();
  listform.reset();
};