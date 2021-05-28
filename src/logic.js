const submitlist = document.querySelector('#submitlist');
const submittask = document.querySelector('#submittask');
const listname = document.querySelector('#defaultlist');
const formdisplay = document.getElementById('form-display');
const list = document.getElementById('list');
const readRadios1 = document.querySelectorAll('.radiobtn');
const task = document.querySelector('#task');
const date = document.querySelector('#date');
const edittask = document.querySelector('#edittask');

export function localstorage1() {
  let liststasks = [];
  if (localStorage.getItem('liststore')) {
    liststasks = JSON.parse(localStorage.liststore);
  }
  return liststasks;
}

export function deletetasklogic(i, remove, listtasks) {
  listtasks[i].todos.splice(remove, 1);
  localStorage.setItem('liststore', JSON.stringify(listtasks));
}

export function checkboxfalse(listtasks, i, remove) {
  listtasks[i].todos[remove].status = false;
  localStorage.setItem('liststore', JSON.stringify(listtasks));
}

export function checkboxtrue(listtasks, i, remove) {
  listtasks[i].todos[remove].status = true;
  localStorage.setItem('liststore', JSON.stringify(listtasks));
}

export function logic(dom1) {
  class Createlist1 {
    constructor(list) {
      this.list = list;
      this.todos = [];
    }
  }

  function Createtask1(date, task, readradiovalue1, status) {
    this.date = date;
    this.task = task;
    this.priority = readradiovalue1;
    this.status = status;
  }

  const liststasks = [];

  if (!localStorage.getItem('liststore')) {
    const listdefault = new Createlist1(listname.textContent);
    liststasks.push(listdefault);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
  }

  const createlist = (e) => {
    const liststasks = localstorage1();
    const list1 = new Createlist1(list.value);
    liststasks.push(list1);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
    e.preventDefault();
    window.location.reload();
  };

  const edittaskform = (e) => {
    const listtasks = localstorage1();

    if (localStorage.getItem('selectedlist')) {
      let readradiovalue2;
      for (let i = 0; i < 3; i += 1) {
        if (dom1.readRadios1edit[i].checked === true) {
          readradiovalue2 = dom1.readRadios1edit[i].value;
          break;
        }
      }

      const selecteditem = localStorage.getItem('selectedlist');

      for (let i = 0; i < listtasks.length; i += 1) {
        if (listtasks[i].list === selecteditem) {
          const remove = localStorage.getItem('selectedtask');
          listtasks[i].todos[remove].task = dom1.taskedit.value;
          listtasks[i].todos[remove].date = dom1.dateedit.value;
          listtasks[i].todos[remove].priority = readradiovalue2;
          localStorage.setItem('liststore', JSON.stringify(listtasks));
          break;
        }
      }
      dom1.dom();
    }
    e.preventDefault();
    window.location.reload();
  };

  const createtask = (e) => {
    const listtasks = localstorage1();

    if (localStorage.getItem('selectedlist')) {
      let readradiovalue1;
      for (let i = 0; i < 3; i += 1) {
        if (readRadios1[i].checked === true) {
          readradiovalue1 = readRadios1[i].value;
          break;
        }
      }

      const tasks = new Createtask1(date.value, task.value, readradiovalue1, false);

      for (let i = 0; i < listtasks.length; i += 1) {
        const selectedlist = localStorage.getItem('selectedlist');

        if (listtasks[i].list === selectedlist) {
          listtasks[i].todos.push(tasks);
          localStorage.setItem('liststore', JSON.stringify(listtasks));
          break;
        }
      }

      e.preventDefault();
      window.location.reload();
    }
  };

  submitlist.addEventListener('click', createlist);

  submittask.addEventListener('click', createtask);
  edittask.addEventListener('click', edittaskform);
  formdisplay.reset();
}
