import React from 'react';
import './index.css';
import Header from './components/header';
import Modal from './components/modal';
import TaskPanel from './components/taskpanel';
import icon from './images/plus.png';
import { useState, useEffect } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [filterText, setFilterText] = useState("");


  useEffect(() => {
    const savedTasks = localStorage.getItem("todoTasks");
    const savedCompleted = localStorage.getItem("completedTasks");

    if (savedTasks) setTodoTasks(JSON.parse(savedTasks));
    if (savedCompleted) setCompletedTasks(JSON.parse(savedCompleted));
  }, []);


  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [todoTasks, completedTasks]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false
    };
    setTodoTasks(curr => [...curr, newTask]);
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

  const deleteTask = (taskId, isCompleted) => {
    if (isCompleted) {
      setCompletedTasks(curr => curr.filter(task => task.id !== taskId));
    } else {
      setTodoTasks(curr => curr.filter(task => task.id !== taskId));
    }
  };

  const filteredTodoTasks = todoTasks.filter(task =>
    task.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredCompletedTasks = completedTasks.filter(task =>
    task.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className='antialiased'>
      <Header />
      <div className="mt-8 px-4 xl:px-32 pb-8 w-full">
        <div className='w-full h-full flex flex-col gap-4 xl:min-w-[487px]'>
          <div className='flex justify-between w-full'>
            <input
              type="text"
              placeholder="Filter tasks..."
              className="w-[166px] xl:w-[250px] max-w-sm h-10 rounded-md border py-2 px-3 font-sans font-normal text-sm border-zinc-200 text-zinc-500"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <button className="h-10 rounded-md py-2 px-4 inline-flex gap-2 bg-neutral-900 items-center"
              onClick={() => setIsModalOpen(true)}>
              <img
                src={icon}
                alt="Add Task"
                className="w-4 h-4"
              />
              <p style={{ letterSpacing: "0%" }} className='text-sm font-medium font-sans text-center text-zinc-50'>Add Task</p>
            </button>
          </div>

          <TaskPanel
            todoTasks={filteredTodoTasks}
            onAddTask={() => setIsModalOpen(true)}
            completedTasks={filteredCompletedTasks}
            onToggleComplete={toggleComplete}
            onDeleteTask={deleteTask} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask} />
    </div>
  );
}

export default App;