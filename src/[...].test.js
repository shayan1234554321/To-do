import { JSDOM } from 'jsdom';
import { create, Delete } from './CRUD.js';
import 'jest-localstorage-mock';

const tasks = { array: [] };
const addAllTasksToHTML = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = 0; i < tasks.array.length; i += 1) {
    // ------ Adding tasks according to index ------
    const task = tasks.array.find((task) => task.index === i);
    // ------ Input ------
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    // ------ Completed line on input ------
    const span = document.createElement('span');
    if (task.completed) {
      span.className = 'completed';
      input.className = 'completedInput';
    }
    // ------ checkbox ------
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    // ------ Delete icon ------
    const img = document.createElement('img');
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
describe('Testing create and delete', () => {
  test('adding one element', () => {
    const dom = new JSDOM('<ul class="list" id="list"></ul>');
    global.document = dom.window.document;
    create(tasks, addAllTasksToHTML, 'ok');
    const li = document.querySelectorAll('#list li');
    expect(li).toHaveLength(1);
  });
  test('removing one element', () => {
    Delete(tasks, 0, addAllTasksToHTML);
    const li = document.querySelectorAll('#list li');
    expect(li).toHaveLength(0);
  });
});