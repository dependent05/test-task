import React from "react";
import TaskItem from "./taskitem";

const TaskPanel = ({ tasks, onToggleComplete, onDeleteTask }) => {
  const todoTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold flex justify-between items-center">
          TODO <span className="text-gray-500 text-sm">{todoTasks.length}</span>
        </h2>
        {todoTasks.length === 0 ? (
          <p className="text-gray-500 text-center font-medium mt-4">You have no tasks</p>
        ) : (
          <div className="space-y-3 mt-4">
            {todoTasks.map(task => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onToggleComplete={() => onToggleComplete(task.id)} 
                onDeleteTask={() => onDeleteTask(task.id)} 
              />
            ))}
          </div>
        )}
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold flex justify-between items-center">
          COMPLETED <span className="text-gray-500 text-sm">{completedTasks.length}</span>
        </h2>
        {completedTasks.length === 0 ? (
          <p className="text-gray-500 text-center font-medium mt-4">Today you don’t have completed tasks</p>
        ) : (
          <div className="space-y-3 mt-4">
            {completedTasks.map(task => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onToggleComplete={() => onToggleComplete(task.id)} 
                onDeleteTask={() => onDeleteTask(task.id)} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskPanel;