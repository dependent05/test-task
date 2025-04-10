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
    <form className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onSubmit={handleSubmit}>
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold">Create task</h2>
        <p className="text-gray-500">Deploy your new task in one-click.</p>

        <label className="block mt-4">
          <span className="font-semibold">Task*</span>
          <input 
            className="w-full border p-2 rounded mt-1" 
            placeholder="Name of your task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="block mt-2">
          <span className="font-semibold">Description</span>
          <input 
            className="w-full border p-2 rounded mt-1" 
            placeholder="Optional"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <div className="flex justify-between mt-4">
          <button type="button" className="bg-gray-200 px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Deploy</button>
        </div>
      </div>
    </form>
  );
}

export default Modal;
