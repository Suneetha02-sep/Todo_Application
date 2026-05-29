import React, { useState, useRef } from 'react';

function TodoForm({ addTodo }) {

  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (input.trim() === '') {
      return;
    }

    addTodo(input);

    setInput('');

    inputRef.current.focus();
  };

  return (

    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
}

export default TodoForm;