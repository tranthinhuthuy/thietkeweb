import React, { useState } from 'react';

const InputTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-todo">
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default InputTodo;