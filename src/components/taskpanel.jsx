import React from "react";
import TaskList from "./tasklist";

const TaskPanel = ({ todoTasks, onAddTask, completedTasks, onToggleComplete, onDeleteTask }) => {
  
  return (
    <div className="space-y-6 p-6">
      <TaskList 
        title="TODO" 
        tasks={todoTasks} 
        onToggleComplete={onToggleComplete} 
        onDeleteTask={onDeleteTask} 
        emptyMessage="You have no tasks"
        subEmptyMessage='You can add any task here."Feed the hedgehog"'
        onAddTask={onAddTask}
      />
      <TaskList 
        title="COMPLETED" 
        tasks={completedTasks} 
        onToggleComplete={onToggleComplete} 
        onDeleteTask={onDeleteTask} 
        emptyMessage="Today you don’t have completed tasks"
        subEmptyMessage='Try to complete this: "Feed the hedgehog"'
      />
    </div>
  );
};

export default TaskPanel;