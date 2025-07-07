import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/AuthContext';
import StartTask from '../UI/StartTask';
import CompleteTask from '../UI/CompleteTask';
import EmpTask from '../UI/EmpTask';


const EmployeDashboard = () => {
  const { logout, user, taskList, empTask, setEmpTask, startTask, setStartTask, completeTask, setCompleteTask, selectedTask, completedTask } = useContext(authContext);
  // const[empTask, setEmpTask] = React.useState(true);
  // const [startTask, setStartTask] = React.useState(false);
  // const [completeTask, setCompleteTask] = React.useState(false);
  // const [selectedTask, setSelectedTask] = React.useState([]);

  // Filter tasks assigned to this employee
  const myTasksList = taskList
    ? taskList.filter(task => task.assignTo === user)
    : [];

  //const [myTasks, setMyTasks] = useState(myTasksList);
  const [myTasks, setMyTasks] = useState(() => {
    const local = localStorage.getItem("myTasks");
    return local ? JSON.parse(local) : myTasksList;
  });



  useEffect(() => {
    const local = localStorage.getItem("myTasks");
    if (local) {
      setMyTasks(JSON.parse(local));
    } else {
      setMyTasks(myTasksList);
    }
  }, [user, taskList]);

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
  }, [myTasks]);

  console.log(myTasks, "myTasks");
  console.log(selectedTask, "selectedTask");
  console.log(completedTask, "completeTask");
  const startTaskClick = () => {
    console.log("Start Task Clicked");
  }

  const handleStartTaskClick = () => {
    console.log("Start Task Clicked");
  }

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
            <button
              type="button"
              onClick={() => {
                setEmpTask(true);
                setStartTask(false);
                setCompleteTask(false);
              }}
              className="basis-1/3 text-center py-2 font-semibold text-gray-700 tracking-wide flex items-center justify-center gap-2 focus:outline-none hover:bg-blue-300 transition rounded-lg"
            >
              Task
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold ml-2">
                {myTasks.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setEmpTask(false);
                setStartTask(true);
                setCompleteTask(false);
              }}
              className="basis-1/3 text-center py-2 font-semibold text-gray-700 tracking-wide flex items-center justify-center gap-2 focus:outline-none hover:bg-yellow-300 transition rounded-lg"
            >
              Start
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white text-xs font-bold ml-2">
                {selectedTask.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setEmpTask(false);
                setStartTask(false);
                setCompleteTask(true);
              }}
              className="basis-1/3 text-center py-2 font-semibold text-gray-700 tracking-wide flex items-center justify-center gap-2 focus:outline-none hover:bg-green-300 transition rounded-lg"
            >
              Complete
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold ml-2">
                {completedTask.length}
              </span>
            </button>
          </div>
          {
            empTask && <EmpTask myTasks={myTasks} setMyTasks={setMyTasks} />}

          {
            startTask && <StartTask selectedTask={selectedTask} />
          }
          {

            completeTask && <CompleteTask completedTask={completedTask} />
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