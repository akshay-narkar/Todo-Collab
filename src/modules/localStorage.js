/* eslint-disable import/no-cycle */
import create from './project';
/* eslint-enable import/no-cycle */

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