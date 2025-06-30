import React, { useContext, useState } from 'react'
import { authContext } from '../context/AuthContext'
import AdminGrid from '../UI/AdminGrid';
import CreateTask from '../UI/CreateTask';
import TaskList from '../UI/TaskList';

const AdminDashboard = () => {
  const { logout, user } = useContext(authContext);
  const [showForm, setShowForm] = useState(false);

  // Dummy tasks for design purpose
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl mt-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Welcome, <span className="text-blue-600">{user}</span>
            </h1>
            <p className="text-gray-500 text-sm">Admin Dashboard</p>
          </div>
          <button
            onClick={logout}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition-all duration-200"
          >
            Logout
          </button>
        </div>
        <AdminGrid setShowForm={setShowForm} showForm={showForm}/>
        {/* Task Create Form (toggle) */}
        {showForm && (
            <>
          <CreateTask/>
          <TaskList/>
          </>
         )}

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Employee Portal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;