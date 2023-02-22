// --------------------------- import --------------------------
import './style.css';
import trash from '../public/trash.png';

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
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'checkbox';
    input.checked = task.completed;
    const p = document.createElement('p');
    p.innerHTML = task.description;
    if (task.completed) p.className = 'completed';
    const img = document.createElement('img');
    img.src = trash;
    img.className = 'trash';
    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(img);
    list.appendChild(li);
  }
};

// --------------------------- event listeners --------------------------

window.addEventListener('DOMContentLoaded', () => {
  addAllTasksHTML();
});