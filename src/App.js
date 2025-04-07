import React from 'react';
import './index.css';
import Header from './components/header';
import Modal from './components/modal';
import TaskPanel from './components/taskpanel';
import ConfirmModal from './components/confirmmodal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [filterText, setFilterText] = useState("");

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false
    };
    setTodoTasks([...todoTasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    const taskInTodo = todoTasks.find(task => task.id === taskId);
    if (taskInTodo) {
      setTodoTasks(todoTasks.filter(task => task.id !== taskId));
      setCompletedTasks([...completedTasks, { ...taskInTodo, completed: true }]);
    } else {
      const taskInCompleted = completedTasks.find(task => task.id === taskId);
      setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
      setTodoTasks([...todoTasks, { ...taskInCompleted, completed: false }]);
    }
  };

  const confirmDeleteTask = (taskId) => {
    setTaskToDelete(taskId); 
  };

  const deleteTask = () => {
    setTodoTasks(todoTasks.filter(task => task.id !== taskToDelete));
    setCompletedTasks(completedTasks.filter(task => task.id !== taskToDelete));
    setTaskToDelete(null); 
  };

  const filteredTodoTasks = todoTasks.filter(task =>
    task.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredCompletedTasks = completedTasks.filter(task =>
    task.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="flex justify-between mt-3 mr-7 ml-7"> 
        <input
         type="text" 
         placeholder="Filter tasks..." 
         className="p-1 border rounded w-48"
         value={filterText} 
         onChange={(e) => setFilterText(e.target.value)} 
         />
        <button className="bg-black text-white p-1 rounded w-24 block"
          onClick={() => setIsModalOpen(true)}> 
          + Add Task
        </button>
      </div>

      <TaskPanel 
      todoTasks={filteredTodoTasks} 
      completedTasks={filteredCompletedTasks}
      onToggleComplete={toggleComplete} 
      onDeleteTask={confirmDeleteTask} />

      <Modal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      onAddTask={addTask} />

      <ConfirmModal 
      isOpen={taskToDelete !== null} 
      onCancel={() => setTaskToDelete(null)} 
      onConfirm={deleteTask} />
    </>
  );
}

export default App;