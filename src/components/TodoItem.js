import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {

  return (

    <div className="todo-item">

      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration:
            todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;