import React, { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";

const EmpTaskCard = ({
  task,
  id,
  setMyTasks,
  myTasks,
  showStart,
  showComplete,
}) => {
  const { selectedTask, setSelectedTask, completedTask, setCompletedTask } =
    useContext(authContext);
  const [startButton, setStartButton] = useState(null);

  const isStarted = selectedTask.some((t) => t.title === task.title);
  const isCompleted = completedTask.some((t) => t.title === task.title);
  console.log(isStarted, "isStarted");
  console.log(isCompleted, "isCompleted");
  const StartTaskClickHandler = (taskName) => {
    console.log("Start Task Clicked", taskName);
    setSelectedTask([...selectedTask, taskName]);
    setMyTasks(myTasks.filter((t) => !(t.title === taskName.title)));
    console.log(task, "task in StartTaskClickHandler");
  };

  console.log(selectedTask, "selectedTask in EmpTaskCard");

  const CompleteTaskClickHandler = (completeTaskName) => {
    setCompletedTask([...completedTask, completeTaskName]);
    setSelectedTask(
      selectedTask.filter((t) => !(t.title === completeTaskName.title))
    );
    console.log("Complete Task Clicked", completeTaskName);
  };
  return (
    <div className="space-y-4">
      <div
        key={id}
        className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
          <p className="text-gray-500 text-sm mb-1">{task.description}</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-600">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {task.category}
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
              {task.date}
            </span>
          </div>
          <div className="mt-4">
            {showStart && (
              <button
                className="ml-2 px-4 py-1 rounded-full bg-yellow-400 text-white font-semibold shadow hover:bg-yellow-500 transition-all duration-200"
                onClick={() => StartTaskClickHandler(task)}
              >
                Start Task
              </button>
            )}

            {showComplete && (
              <button
                className="ml-2 px-4 py-1 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition-all duration-200"
                onClick={() => CompleteTaskClickHandler(task)}
              >
                Complete Task
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpTaskCard;
