import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </li>
  );
};

export default TodoItem;