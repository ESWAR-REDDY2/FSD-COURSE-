import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Add new task
  const AddTask = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  // Toggle completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Update task with new text
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null); // exit edit mode
    setEditText("");
  };

  return (
    <div>
      <h1>To-Do App List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={AddTask}>ADD</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            {editId === todo.id ? (
              <div>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
                <button onClick={() => updateTodo(todo.id)}>Save</button>
                <button
                  onClick={() => {
                    setEditId(null);
                    setEditText("");
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span
                  onClick={() => toggleTodo(todo.id)}
                  style={{ cursor: "pointer" }}
                >
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)}>REMOVE</button>
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  UPDATE
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
