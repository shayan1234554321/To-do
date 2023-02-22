import { Save } from './local-storage.js';

const formInput = document.getElementById('formInput');

export const create = (tasks, addAllTasksToHTML) => {
  tasks.array.push({
    completed: false,
    description: formInput.value,
    index: tasks.array.length,
  });
  formInput.value = '';
  addAllTasksToHTML();
  Save(tasks.array);
};

export const update = (tasks, index, value) => {
  tasks.array[index].description = value;
  Save(tasks.array);
};

export const Delete = (tasks, taskIndex, addAllTasksToHTML) => {
  const tempTasks = [];
  let index = 0;
  for (let i = 0; i < tasks.array.length; i += 1) {
    if (i !== taskIndex) {
      tempTasks.push({ ...tasks.array[i], index });
      index += 1;
    }
  }
  tasks.array = tempTasks;
  Save(tasks.array);
  addAllTasksToHTML();
};
