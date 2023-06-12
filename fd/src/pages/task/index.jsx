import React, { useState, useEffect } from "react";
import "./TaskApp.css";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = () => {
    if (newTask === "") return;
    const newTaskObj = { id: Date.now(), title: newTask };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (!taskToEdit) return;
    setEditingTaskId(taskId);
    setNewTask(taskToEdit.title);
  };

  const updateTask = () => {
    if (newTask.trim() === "") return;
    const updatedTasks = tasks.map((task) => {
      if (task.id === editingTaskId) {
        return { ...task, title: newTask };
      }
      return task;
    });
    setTasks(updatedTasks);
    setNewTask("");
    setEditingTaskId(null);
  };

  return (
    <div className="container">
      <h1 className="title">Task App</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            ) : (
              <span>{task.title}</span>
            )}
            <button className="edit-btn" onClick={() => editTask(task.id)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {editingTaskId ? (
        <button className="update-btn" onClick={updateTask}>
          Update Task
        </button>
      ) : (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskApp;
