import { Save } from './local-storage.js';

const handleComplete = (tasks, index, checkValue) => {
  tasks.array[index].completed = checkValue;
  Save(tasks.array);
};

const clearAllComplete = (tasks, addAllTasksToHTML) => {
  const tempTasks = [];
  let index = 0;
  for (let i = 0; i < tasks.array.length; i += 1) {
    if (tasks.array[i].completed === false) {
      tempTasks.push({ ...tasks.array[i], index });
      index += 1;
    }
  }
  tasks.array = tempTasks;
  Save(tasks.array);
  addAllTasksToHTML();
};

export {
  handleComplete,
  clearAllComplete,
};