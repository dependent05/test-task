import { useState } from "react";
import ConfirmModal from "./confirmmodal";
import icon from "../images/trash.png";

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDelete = () => {
    setIsConfirmOpen(true);
  };

  const confirmDelete = () => {
    onDeleteTask(task.id, task.completed);
    setIsConfirmOpen(false);
  };

  return (
    <div className="relative w-full rounded-lg border p-6 flex flex-row items-center gap-4 bg-white border-zinc-200 shadow-sm">
      <label className="min-w-4 w-4 h-4 rounded-sm border border-zinc-900">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleComplete}
          className="hidden"
        />
        {task.completed && (
          <div className="bg-zinc-900 h-full flex justify-center items-center">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3333 1L3.99996 8.33333L0.666626 5" stroke="#FAFAFA" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </label>

      <div className="w-full flex flex-col gap-1.5">
        <p style={{ lineHeight: "100%" }} className="font-semibold text-base tracking-[-0.4px]">
          {task.title}
        </p>
        {task.description && (
          <p className="font-normal text-sm text-zinc-500">{task.description}</p>
        )}
      </div>
        <div className="relative">
      <button
        className="min-w-8 w-8 h-8 rounded-md bg-red-600 hover:bg-red-600/90"
        onClick={handleDelete}
      >
        <img src={icon} alt="Delete" className="w-4 h-4 m-auto" />
      </button>

      {isConfirmOpen && (
        <div className="absolute right-0 -top-[122px] translate-y-full z-50">
          <ConfirmModal
            isOpen={true}
            onCancel={() => setIsConfirmOpen(false)}
            onConfirm={confirmDelete}
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default TaskItem;
