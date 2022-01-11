const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.querySelector('.main-wrapper_todos')
const title_container = document.querySelector('#title_container')
const description_container = document.querySelector('#description_container')
const todos = [];

const initApplication = () => {
  const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

  if (existingTodos[existingTodos.length -1].title && existingTodos[existingTodos.length -1].description) { 
    title_container.innerText = existingTodos[existingTodos.length -1].title;
    description_container.innerText = existingTodos[existingTodos.length -1].description;
  } 
}

submit_todo_btn.onclick = () => {

  const todo = {
    title: todo_title_input.value,
    description: todo_description_text_area.value
  };

  const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
  existingTodos.push(todo)

  localStorage.setItem('todos', JSON.stringify(existingTodos));
  title_container.innerText = todo.title;
  description_container.innerText = todo.description;
};

const getInputs = () => {
  if (todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
    submit_todo_btn.removeAttribute('disabled');
  } else {
    submit_todo_btn.setAttribute('disabled', true);
  }
};

todo_title_input.oninput = () => {
  getInputs();
};

todo_description_text_area.oninput = () => {
  getInputs();
};

initApplication();
