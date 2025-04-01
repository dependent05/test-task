import React from "react";
import TaskItem from "./taskitem";

const TaskList = ({ title, tasks, onToggleComplete, onDeleteTask, emptyMessage }) => (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold flex justify-between items-center">
        {title} <span className="text-gray-500 text-sm">{tasks.length}</span>
      </h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center font-medium mt-4">{emptyMessage}</p>
      ) : (
        <div className="space-y-3 mt-4">
          {tasks.map(task => (
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
  );

  export default TaskList;