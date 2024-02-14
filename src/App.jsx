import React, { useState } from 'react';
import './App.css';
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const saveEditedTask = (index) => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask.trim();
      setTasks(updatedTasks);
      setEditIndex(null);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div id="root">
    <div class="container">
      <h1>Todo App</h1>
      <div class="centered">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul class="centered">
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={() => saveEditedTask(index)}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default TodoApp;
