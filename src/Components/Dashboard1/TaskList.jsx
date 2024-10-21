import React, { useState } from 'react';
import style from "../../Pages/dashboard.module.css"
// import style from './card.module.css';
const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Update sales dashboard', completed: false },
    { id: 2, task: 'Send weekly report', completed: false },
    { id: 3, task: 'Call client X', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className={style.tasklist}>
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTaskCompletion(task.id)}
            className={task.completed ? 'completed' : ''}
          >
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
