import React, { useState } from 'react';

const TodoApp = () => {
	  const [tasks, setTasks] = useState([]);
	  const [newTask, setNewTask] = useState('');

	  // Function to handle adding a new task
	//   const addTask = () => {
	//       if (newTask.trim() !== '') {
	//             setTasks([...tasks, { id: Date.now(), content: newTask, completed: false }]);
	//                   setNewTask('');
	//                       }
	//                         };
	//
	//                           // Function to handle marking a task as completed
	//                             const toggleComplete = (taskId) => {
	//                                 const updatedTasks = tasks.map((task) =>
	//                                       task.id === taskId ? { ...task, completed: !task.completed } : task
	//                                           );
	//                                               setTasks(updatedTasks);
	//                                                 };
	//
	//                                                   // Function to handle deleting a task
	//                                                     const deleteTask = (taskId) => {
	//                                                         const updatedTasks = tasks.filter((task) => task.id !== taskId);
	//                                                             setTasks(updatedTasks);
	//                                                               };
	//
	//                                                                 return (
	//                                                                     <div className="todo-app">
	//                                                                           <h1>Todo List</h1>
	//                                                                                 <div className="input-container">
	//                                                                                         <input
	//                                                                                                   type="text"
	//                                                                                                             placeholder="Add a new task"
	//                                                                                                                       value={newTask}
	//                                                                                                                                 onChange={(e) => setNewTask(e.target.value)}
	//                                                                                                                                         />
	//                                                                                                                                                 <button onClick={addTask}>Add Task</button>
	//                                                                                                                                                       </div>
	//                                                                                                                                                             <ul className="task-list">
	//                                                                                                                                                                     {tasks.map((task) => (
	//                                                                                                                                                                               <li key={task.id} className={task.completed ? 'completed' : ''}>
	//                                                                                                                                                                                           <span onClick={() => toggleComplete(task.id)}>
	//                                                                                                                                                                                                         {task.content}
	//                                                                                                                                                                                                                     </span>
	//                                                                                                                                                                                                                                 <button onClick={() => deleteTask(task.id)}>Delete</button>
	//                                                                                                                                                                                                                                           </li>
	//                                                                                                                                                                                                                                                   ))}
	//                                                                                                                                                                                                                                                         </ul>
	//                                                                                                                                                                                                                                                             </div>
	//                                                                                                                                                                                                                                                               );
	//                                                                                                                                                                                                                                                               };
	//
	//                                                                                                                                                                                                                                                               export default TodoApp;
	//
