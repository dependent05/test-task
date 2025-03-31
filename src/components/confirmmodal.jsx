import React from "react";

const ConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold">Delete Task</h2>
        <p className="text-gray-500">Are you sure you want to delete this task?</p>

        <div className="flex justify-end mt-4">
          <button className="bg-gray-200 px-4 py-2 rounded mr-2" onClick={onCancel}>
            Cancel
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
