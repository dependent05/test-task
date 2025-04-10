import React from "react";
import TaskItem from "./taskitem";

const TaskList = ({ title, tasks, onAddTask, onToggleComplete, onDeleteTask, emptyMessage, subEmptyMessage }) => (
    <div className="rounded-lg p-6 bg-gray-50 mr-20 ml-20 min-h-[350px] border-b border-gray-300 shadow-md">
      <h2 className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-4 flex items-center">
        {title} 
        <span className="ml-2 bg-gray-100 text-gray-500 text-sm font-bold px-2 py-1 rounded my-auto">
          {tasks.length}
        </span>
      </h2>
      {tasks.length === 0 ? (
        <>
        <p className="text-black text-3xl text-center font-bold mt-16">
          {emptyMessage}
        </p>
        <p className="text-center text-base text-gray-400 mt-1">
          {subEmptyMessage}
        </p>
        {title === "TODO" && onAddTask && (
            <button
              className="mt-4 bg-black text-white p-2 rounded-lg w-28 h-10 block mx-auto"
              onClick={onAddTask}
            >
              + Add Task
            </button>
          )}
    
       </>
      ) : (
        <div className="space-y-3 mt-4">
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleComplete={() => onToggleComplete(task.id)} 
              onDeleteTask={() => onDeleteTask(task.id, task.completed)} 
            />
          ))}
        </div>
      )}
    </div>
  );

  export default TaskList;