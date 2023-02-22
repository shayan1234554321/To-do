export const Save = (array) => {
  localStorage.tasks = JSON.stringify(array);
  return 'saved';
};

export const Load = () => JSON.parse(localStorage.tasks);