import React from 'react';

const Header = () => {
    return (
     
      <header className="header bg-white border-b border-gray-300 shadow-md">
          <div className="header-title">
            
            <h1 className="text-2xl font-bold">My Tasks</h1>
              <p className="text-gray-500 text-sm">Here’s a list of your tasks for the day!</p>
          </div>
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      
      </header>
      
    );
  };
  
  export default Header;
  
  