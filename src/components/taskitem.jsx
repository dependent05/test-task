import React from "react";
import icon from '../images/1483063.png';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="border p-3 rounded flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={onToggleComplete} 
          className="w-5 h-5"
        />
        <div>
          <h3 className={`font-semibold ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
          </h3>
          {task.description && <p className="text-gray-600">{task.description}</p>}
        </div>
      </div>
      <button className="bg-red-500 text-white p-1 rounded" onClick={onDeleteTask}>
      <img src={icon} alt="Delete" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TaskItem;
