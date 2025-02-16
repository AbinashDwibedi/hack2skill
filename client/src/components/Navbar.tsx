import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-2xl font-bold">A.I.TeachMate</div>
        <div className="space-x-4">
          {/* <a href="/" className="hover:text-gray-300 transition">Home</a>
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;