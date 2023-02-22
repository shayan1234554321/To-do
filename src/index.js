// --------------------------- import --------------------------
import './style.css';
import trash from '../public/trash.png';
import { Load } from './local-storage.js';
import { create, update, Delete } from './CRUD.js';

// --------------------------- Variables --------------------------

const list = document.getElementById('list');
const form = document.getElementById('form');
const tasks = { array: [] };

// --------------------------- functions --------------------------

const addAllTasksToHTML = () => {
  list.innerHTML = '';
  for (let i = 0; i < tasks.array.length; i += 1) {
    // ------ Adding tasks according to index ------

    const task = tasks.array.find((task) => task.index === i);
    // ------ checkbox ------

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;

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
  create(tasks, addAllTasksToHTML);
}));
