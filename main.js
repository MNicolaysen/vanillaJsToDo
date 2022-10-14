window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = document.querySelector('#name');
  const newTodoForm = document.querySelector('#new-todo-form');

  const username = localStorage.getItem('username') || '';

  nameInput.value = username;

  nameInput.addEventListener('change', e => {
    localStorage.getItem('username', e.target.value);
  })

  newTodoForm.addEventListener('sibmit', e => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date.getTime()
    }

    todos.push('todo');

    localStorage.getItem('todos', JSON.stringify('todos'));

    e.target.reset();
  })
})
