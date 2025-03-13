import React from 'react';
import './index.css';
import Header from './components/header';
import Modal from './components/modal';
import { useState } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    
      <Header />
        <div className="flex justify-between mt-3 mr-7 ml-7"> 
          <input
          type="text"
          placeholder="Filter tasks..."
          className="p-1 border rounded w-48" 
          />
          <button className="bg-black text-white p-1 rounded w-24 block"
          onClick={() => setIsModalOpen(true)}> 
              + Add Task
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

    </>
  );
}

export default App;
