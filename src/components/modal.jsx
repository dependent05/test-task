import React from "react";

function Modal ({ isOpen, onClose }) {
    
    if (!isOpen) return null;
    
    return (
    <form className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold">Create task</h2>
        <p className="text-gray-500">Deploy your new task in one-click.</p>

        <label className="block mt-4">
          <span className="font-semibold">Task*</span>
          <input className="w-full border p-2 rounded mt-1" placeholder="Name of your task" />
        </label>

        <label className="block mt-2">
          <span className="font-semibold">Description</span>
          <input className="w-full border p-2 rounded mt-1" placeholder="Optional" />
        </label>

        <div className="flex justify-end mt-4">
          <button className="bg-gray-200 px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
          <button className="bg-black text-white px-4 py-2 rounded">Deploy</button>
        </div>
      </div>
    </form>);

}

export default Modal;
