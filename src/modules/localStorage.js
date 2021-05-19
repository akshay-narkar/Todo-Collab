import create from './project';

// Local storage

const addToLocalStorage = (listOfProjects) => {
  localStorage.setItem('listOfProjects', JSON.stringify(listOfProjects));
  create();
};

// Add the selected project to local storage
const addSelectedProject = (selectedProjectId) => {
  localStorage.setItem('selectedProjectId', JSON.stringify(selectedProjectId));
  create();
};

export {
  addToLocalStorage,
  addSelectedProject,
};