import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  // Toggle Todo
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  // Delete Todo
  const deleteTodo = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (confirmDelete) {
      const filteredTodos = todos.filter(
        (todo) => todo.id !== id
      );

      setTodos(filteredTodos);
    }
  };

  return (
    <div className="container">

      <h1>Todo Application</h1>

      <div className="counter">
        Total Todos: {todos.length}
      </div>

      <TodoForm addTodo={addTodo} />

      {
        todos.length === 0 ? (
          <p className="empty">No Todos Available</p>
        ) : (
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      }

    </div>
  );
}

export default App;