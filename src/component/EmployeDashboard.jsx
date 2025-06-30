import React, { useContext } from 'react'
import { authContext } from '../context/AuthContext';
import StartTask from '../UI/StartTask';
import CompleteTask from '../UI/CompleteTask';

const EmployeDashboard = () => {
  const { logout, user, taskList } = useContext(authContext);
  const [StartTask, setStartTask] = React.useState(false);
  const [CompleteTask, setCompleteTask] = React.useState(false);

  // Agar aapke context me taskList nahi hai, to dummy data use kar sakte hain:
  // const taskList = [
  //   {
  //     title: "Design Homepage",
  //     date: "2025-06-30",
  //     assignTo: "Rahul Sharma",
  //     category: "Design",
  //     description: "Create a modern homepage layout for the new project."
  //   },
  //   {
  //     title: "API Integration",
  //     date: "2025-07-02",
  //     assignTo: "Rahul Sharma",
  //     category: "Development",
  //     description: "Integrate employee API with dashboard."
  //   }
  // ];

  // Filter tasks assigned to this employee
  const myTasks = taskList
    ? taskList.filter(task => task.assignTo === user)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl mt-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Welcome, <span className="text-blue-600">{user}</span>
            </h1>
            <p className="text-gray-500 text-sm">Employee Dashboard</p>
          </div>
          <button
            onClick={logout}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition-all duration-200"
          >
            Logout
          </button>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold text-purple-700 mb-4">Your Tasks</h2>

        <div className="flex flex-row bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow mb-4">
  <div className="basis-1/3 text-center py-2 font-semibold text-gray-700 tracking-wide flex items-center justify-center gap-2">
    Task
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold ml-2">
      {myTasks.length}
    </span>
  </div>
  <div className="basis-1/3 text-center py-2 font-semibold text-gray-700 tracking-wide flex items-center justify-center gap-2">
    Start
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white text-xs font-bold ml-2">
      {/* Yahan apne hisaab se start count dijiye, abhi 0 diya hai */}
      0
    </span>
  </div>
  <div className="basis-1/3 text-center py-2 font-semibold text-gray-700 tracking-wide flex items-center justify-center gap-2">
    Complete
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold ml-2">
      {/* Yahan apne hisaab se complete count dijiye, abhi 0 diya hai */}
      0
    </span>
  </div>
</div>

          {myTasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks assigned yet.</p>
          ) : (
            <div className="space-y-4">
              {myTasks.map((task, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
                    <p className="text-gray-500 text-sm mb-1">{task.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{task.category}</span>
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{task.date}</span>
                    </div>
                    <div className='mt-4'>
                      <button
    className="ml-2 px-4 py-1 rounded-full bg-yellow-400 text-white font-semibold shadow hover:bg-yellow-500 transition-all duration-200"
  >
    Start Task
  </button>
  <button
    className="ml-2 px-4 py-1 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition-all duration-200"
  >
    Complete Task
  </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {
            StartTask && <StartTask/>
          }
      {
            
            CompleteTask && <CompleteTask/>
          }
          
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Employee Portal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmployeDashboard;