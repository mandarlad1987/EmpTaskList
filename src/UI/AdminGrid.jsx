import React from 'react'

const AdminGrid = ({setShowForm,showForm}) => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow flex flex-col items-center">
            <img src="https://img.icons8.com/color/96/000000/admin-settings-male.png" alt="Admin" className="mb-2" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Manage Employees</h2>
            <p className="text-gray-500 text-center">Add, edit, or remove employee records and manage their roles.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow flex flex-col items-center">
            <img src="https://img.icons8.com/color/96/000000/combo-chart--v2.png" alt="Reports" className="mb-2" />
            <h2 className="text-xl font-semibold text-purple-700 mb-2">View Reports</h2>
            <p className="text-gray-500 text-center">Analyze employee performance and department statistics.</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-50 rounded-xl p-6 shadow flex flex-col items-center hover:bg-green-100 transition"
          >
            <img src="https://img.icons8.com/color/96/000000/add-task.png" alt="Create Task" className="mb-2" />
            <h2 className="text-xl font-semibold text-green-700 mb-2">Create Task</h2>
            <p className="text-gray-500 text-center">Click to create a new task for employees.</p>
          </button>
        </div>
    </>
  )
}

export default AdminGrid