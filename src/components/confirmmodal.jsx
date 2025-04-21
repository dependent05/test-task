import React from "react";

const ConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null; 

  return (
    <div className="w-[320px] rounded-lg border p-6 flex flex-col gap-4 bg-white border-zinc-200 shadow-lg">
    <div className="w-full flex flex-col gap-2">
      <h2 className="font-semibold font-sans text-lg text-zinc-900">You want to delete task?</h2>
      <p className="font-normal font-sans text-sm text-zinc-500">Once deleted it will disappear forever</p>
    </div>
    <div className="w-full flex justify-end gap-2">
      <button className="h-10 rounded-md border py-2 px-4" onClick={onCancel}>
        <p className="font-medium font-sans text-sm text-zinc-900">Cancel</p>
      </button>
      <button className="h-10 rounded-md border py-2 px-4 bg-zinc-900" onClick={onConfirm}>
        <p className="font-medium font-sans text-sm text-zinc-50">Confirm</p>
      </button>
    </div>
  </div>
  );
};

export default ConfirmModal;
