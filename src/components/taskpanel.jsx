import React from "react";
import TaskList from "./tasklist";

const TaskPanel = ({ todoTasks, completedTasks, onToggleComplete, onDeleteTask }) => {
  
  return (
    <div className="space-y-6 p-6">
      <TaskList 
        title="TODO" 
        tasks={todoTasks} 
        onToggleComplete={onToggleComplete} 
        onDeleteTask={onDeleteTask} 
        emptyMessage="You have no tasks"
      />
      <TaskList 
        title="COMPLETED" 
        tasks={completedTasks} 
        onToggleComplete={onToggleComplete} 
        onDeleteTask={onDeleteTask} 
        emptyMessage="Today you don’t have completed tasks"
      />
    </div>
  );
};

export default TaskPanel;