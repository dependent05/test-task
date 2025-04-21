import React from "react";
import { useState } from "react";

function Modal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onAddTask(title, description);
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <form className="fixed inset-0 bg-zinc-950/20 flex justify-center items-center z-50" onSubmit={handleSubmit}>
      <div className="w-[369px] rounded-lg border p-6 flex flex-col gap-6 bg-white border-zinc-100 shadow-sm">
        <div className="w-full flex flex-col gap-1.5">
          <p style={{ lineHeight: "100%" }} className="font-semibold font-sans text-2xl tracking-[-0.4px] text-zinc-950">Create task</p>
          <p className="font-normal text-sm text-zinc-500 font-sans">Deploy your new task in one-click.</p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="title" style={{ lineHeight: "100%" }} className="font-medium font-sans text-sm text-zinc-900">Task*</label>
            <input
              className="w-full h-10 rounded-md border py-2 px-3 font-normal text-sm text-zinc-500 font-sans"
              placeholder="Name of your task"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="description" style={{ lineHeight: "100%" }} className="font-medium font-sans text-sm text-zinc-900">Description</label>
            <input
              className="w-full h-10 rounded-md border py-2 px-3 font-normal text-sm text-zinc-500 font-sans"
              placeholder="Optional"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex justify-between">
          <button type="button" className="h-10 rounded-md border py-2 font-sans px-4 bg-white border-zinc-200 text-zinc-900" onClick={onClose}>Cancel</button>
          <button type="submit" className="h-10 rounded-md py-2 px-4 font-sans bg-zinc-900 text-zinc-50">Deploy</button>
        </div>
      </div>
    </form>
  );
}

export default Modal;
