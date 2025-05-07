import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import { loadTodos, saveTodos } from './logic/TodosLogic';

const App = () => {
  const [todos, setTodos] = useState(loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;