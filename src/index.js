// --------------------------- import --------------------------
import './style.css';
import more from '../public/more.svg';

// --------------------------- Variables --------------------------

const list = document.getElementById('list');

const tasks = [
  {
    description: 'Clean my room',
    completed: true,
    index: 2,
  },
  {
    description: 'Take a bath',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash my clothes',
    completed: false,
    index: 3,
  },
];

// --------------------------- functions --------------------------

const addAllTasksHTML = () => {
  list.innerHTML = '';
  for (let i = 1; i <= tasks.length; i += 1) {
    const task = tasks.find((task) => task.index === i);
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    const span = document.createElement('span');
    if (task.completed) {
      span.className = 'completed';
      input.className = 'completedInput';
    }
    const img = document.createElement('img');
    img.src = more;
    img.className = 'more';
    li.appendChild(checkbox);
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(img);
    list.appendChild(li);
  }
};

// --------------------------- event listeners --------------------------

window.addEventListener('DOMContentLoaded', () => {
  addAllTasksHTML();
});