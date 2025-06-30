import React, { useContext } from 'react'
import { authContext } from '../context/AuthContext';

const CreateTask = () => {
const {tasks , setTaskList } = useContext(authContext);
    const [tasktitle, setTaskTitle] = React.useState("");
    const [date, setDate] = React.useState("");
    const [assign, setAssign] = React.useState("");
    const [description, setDescription] = React.useState("");

    const TaskButtonHandler = ()=> {
        // Logic to handle task creation
        alert("Task Created Successfully!");
        const newTask = {
            title: tasktitle,
            date: date,
            assignTo: assign,
            description: description
        };
        setTaskList([...tasks, newTask]);
        setTaskTitle("");
        setDate("");
        setAssign("");
        setDescription("");
        console.log("New Task Created:", newTask);
    }
  return (
    <>
    <div className="bg-blue-50 rounded-xl p-6 shadow mt-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Create Task</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Task Title</label>
                <input value={tasktitle} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter task title" onChange={(e)=>setTaskTitle(e.target.value)} />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Date</label>
                <input type="date" value={date} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={(e)=>setDate(e.target.value)} />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Assign To</label>
                <input type="text" value={assign} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Employee name" onChange={(e)=>setAssign(e.target.value)} />
              </div>
              {/* <div>
                <label className="block text-gray-700 font-medium mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select category</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Testing">Testing</option>
                  <option value="Management">Management</option>
                </select>
              </div> */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <textarea value= {description} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="3" placeholder="Task description" onChange={(e)=>setDescription(e.target.value)}></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button type="button" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-6 py-2 rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-200" onClick={TaskButtonHandler}>
                  Create Task
                </button>
              </div>
            </form>
          </div>
    </>
  )
}

export default CreateTask