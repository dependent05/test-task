import React from "react";
import TaskItem from "./taskitem";

const TaskList = ({ title, tasks, onAddTask, onToggleComplete, onDeleteTask, emptyMessage, subEmptyMessage }) => (
  <div className={'w-full rounded-2xl border p-8 flex flex-col gap-4 bg-zinc-100/40 border-zinc-200 shadow-md ' + (tasks.length === 0 ? "min-h-[314px]" : "h-min")}>
    <h3 className="flex flex-row gap-3 items-center">
      <p style={{ lineHeight: "14px" }} className="font-bold font-sans text-sm text-zinc-500">
        {title}
      </p>
      <p className="px-1 rounded bg-zinc-100 font-bold font-sans text-sm text-zinc-500">
        {tasks.length}
      </p>
    </h3>
    {tasks.length === 0 ? (
      <div className="w-full h-full flex flex-col items-center gap-1 pt-6 xl:pt-8 xl:has-[:checked]:pt-16">
        <input type="checkbox" className="hidden" checked={title !== "TODO"} />
        <p className="font-bold text-2xl font-sans text-center text-zinc-900">
          {emptyMessage}
        </p>
        <p className="font-normal text-sm font-sans text-center text-zinc-500">
          {subEmptyMessage}
        </p>
        {title === "TODO" && onAddTask && (
          <div className="pt-4">
            <button className="h-10 rounded-md py-2 px-4 bg-zinc-900"
              onClick={onAddTask}>
              <p style={{ letterSpacing: "0%" }} className='font-medium font-sans text-sm text-center text-zinc-50'>Add Task</p>
            </button>
          </div>
        )}

      </div>
    ) : (
      <>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={() => onToggleComplete(task.id)}
            onDeleteTask={() => onDeleteTask(task.id, task.completed)}
          />
        ))}
      </>
    )}
  </div>
);

  export default TaskList;