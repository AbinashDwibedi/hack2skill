import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="absolute inset-0 bg-[url(https://img.freepik.com/free-photo/office-desk-table-with-pencils-supplies_155003-5657.jpg?semt=ais_hybrid)] bg-cover bg-no-repeat bg-fixed blur-md opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">Welcome to Student Feedback</h1>
        <p className="text-lg max-w-lg mb-6 font-light text-gray-200">
          Here, students can interact with teachers to share their feedback and improve learning experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/student-login" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            Student Login
          </Link>
          <Link to="/teacher-login" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            Teacher Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;