import React, { useContext } from 'react'
import { authContext } from '../context/AuthContext';

const TaskList = () => {
    const {tasks, taskList } = useContext(authContext);
  return (
    <>
    <div className="bg-purple-50 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold text-purple-700 mb-4">Task List</h2>
          <div className="space-y-4">
            {taskList.map((task, id) => (
              <div key={id} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
                  <p className="text-gray-500 text-sm mb-1">{task.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                    {/* <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{task.category}</span> */}
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Assign: {task.assignTo}</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{task.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default TaskList