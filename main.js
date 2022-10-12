window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = document.querySelector('#name');
  const newTodoForm = document.querySelector('#new-todo-form');

  const username = localStorage.getItem('username') || '';

  nameInput.value = username;

  nameInput.addEventListener('change', e => {
    localStorage.getItem('username', e.target.value);
  })
})
