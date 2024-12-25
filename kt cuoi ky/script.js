const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
};

const saveTasks = () => {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(item => {
        tasks.push({
            text: item.querySelector('span').textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTaskToDOM = (text, completed = false) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    span.textContent = text;
    li.appendChild(span);

    deleteBtn.textContent = 'x';
    deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
    };
    li.appendChild(deleteBtn);

    if (completed) {
        li.classList.add('completed');
    }

    li.onclick = (e) => {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
            saveTasks();
        }
    };

    taskList.appendChild(li);
};

addTaskBtn.onclick = () => {
    const text = taskInput.value.trim();
    if (text) {
        addTaskToDOM(text);
        taskInput.value = '';
        saveTasks();
    }
};

taskInput.onkeypress = (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.onclick();
    }
};

// Initialize
loadTasks();