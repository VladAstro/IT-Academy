const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.getElementById('todos-container');
let todos = [];

function renderTodo(todoItem) {
    const container_html = document.createElement('div');
    container_html.className = 'todo__item'; 
    const title_html = document.createElement('h3');
    const description_html = document.createElement('p');
    description_html.className = 'todo__item-description'
    const remove_btn_html = document.createElement('img');
    remove_btn_html.src = 'https://icon-library.com/images/trash-icon-free/trash-icon-free-20.jpg';
    remove_btn_html.width = 30;
    remove_btn_html.className = 'todo__item_remove_btn';
    remove_btn_html.addEventListener('click', () => {
        todos = todos.filter((todo) => todo !== todoItem); 
        localStorage.setItem('todos', JSON.stringify(todos));
        container_html.remove();
    });

    title_html.innerText = todoItem.title;
    description_html.innerText = todoItem.description;
    container_html.append(title_html, description_html, remove_btn_html);
    todos_container.append(container_html);
};

const initApplication = () => {
    const todosFromStorage = localStorage.getItem('todos');
    if (!todosFromStorage) { 
        localStorage.setItem('todos', JSON.stringify([]));
        return;
    };

    todos = JSON.parse(localStorage.getItem('todos') || []);
    todos.forEach((todo) => {
        renderTodo(todo);
    });
};

submit_todo_btn.onclick = () => {
    const todo = {
        title: todo_title_input.value,
        description: todo_description_text_area.value
    };

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodo(todo);
};

const toggleButtonAccess = () => {
    if (todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
        submit_todo_btn.removeAttribute('disabled');
        return;
    }
    submit_todo_btn.setAttribute('disabled', true);
};

todo_title_input.oninput = toggleButtonAccess;
todo_description_text_area.oninput = toggleButtonAccess;

initApplication();
