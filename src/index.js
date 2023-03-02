// --------------------------- import --------------------------
import './style.css';
import trash from '../public/trash.png';
import { Load } from './local-storage.js';
import { create, update, Delete } from './CRUD.js';
import { handleComplete, clearAllComplete } from './interactions.js';

// --------------------------- Variables --------------------------

const list = document.getElementById('list');
const form = document.getElementById('form');
const deleteCompleted = document.getElementById('deleteCompleted');
const tasks = { array: [] };
const formInput = document.getElementById('formInput');

// --------------------------- functions --------------------------

const addAllTasksToHTML = () => {
  list.innerHTML = '';
  for (let i = 0; i < tasks.array.length; i += 1) {
    // ------ Adding tasks according to index ------

    const task = tasks.array.find((task) => task.index === i);

    // ------ Input ------

    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    input.addEventListener('keyup', (e) => {
      update(tasks, task.index, e.target.value);
    });

    // ------ Completed line on input ------

    const span = document.createElement('span');
    if (task.completed) {
      span.className = 'completed';
      input.className = 'completedInput';
    }

    /* eslint-disable no-inner-declarations */
    function checked() {
      span.classList.toggle('completed');
      input.classList.toggle('completedInput');
    }

    // ------ checkbox ------

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', (e) => {
      handleComplete(tasks, task.index, e.target.checked);
      checked()
    });

    // ------ Delete icon ------

    const img = document.createElement('img');
    img.src = trash;
    img.className = 'trash';
    img.addEventListener('click', () => {
      Delete(tasks, task.index, addAllTasksToHTML);
    });

    // ------ appending to html ------

    const li = document.createElement('li');
    li.append(checkbox, input, span, img);
    list.appendChild(li);
  }
};

// --------------------------- event listeners --------------------------

window.addEventListener('DOMContentLoaded', () => {
  tasks.array = Load();
  addAllTasksToHTML();
});

form.addEventListener('submit', ((e) => {
  e.preventDefault();
  create(tasks, addAllTasksToHTML, formInput.value);
  formInput.value = '';
}));

deleteCompleted.addEventListener('click', () => {
  clearAllComplete(tasks, addAllTasksToHTML);
});
