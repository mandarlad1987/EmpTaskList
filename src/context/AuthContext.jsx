import React, { createContext, useState, useEffect } from "react";
import { getUserDetails } from "../localStorage/LocalStorage";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  // Check localStorage for login state
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });
  const [user, setUser] = useState(() => {
    return localStorage.getItem("currentUser") || "";
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState(getUserDetails());
  const [taskList, setTaskList] = useState(() => {
    const tasks = localStorage.getItem("taskList");
    return tasks ? JSON.parse(tasks) : [];
  });

  const [empTask, setEmpTask] = useState(true);
  const [startTask, setStartTask] = useState(false);
  const [completeTask, setCompleteTask] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [showComplete, setShowComplete] = useState(true);
  const [selectedTask, setSelectedTask] = useState(() => {
    const local = localStorage.getItem("selectedTask");
    return local ? JSON.parse(local) : [];
  });

  const [completedTask, setCompletedTask] = useState(() => {
    const local = localStorage.getItem("completedTask");
    return local ? JSON.parse(local) : [];
  });

  console.log(completedTask, "completedTask in AuthContext");

  useEffect(() => {
    localStorage.setItem("selectedTask", JSON.stringify(selectedTask));
  }, [selectedTask]);

  useEffect(() => {
    localStorage.setItem("completedTask", JSON.stringify(completedTask));
  }, [completedTask]);

  const userAuthDetails = (email, password) => {
    const foundUser = userDetails.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setIsLogin(true);
      setUser(foundUser.name);
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("currentUser", foundUser.name);
      localStorage.setItem("currentRole", foundUser.role); // Save role
    } else {
      setIsLogin(false);
      localStorage.setItem("isLogin", "false");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentRole");
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  // Logout helper (optional)
  const logout = () => {
    setIsLogin(false);
    setUser("");
    localStorage.setItem("isLogin", "false");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentRole");
  };

  const data = {
    isLogin,
    setIsLogin,
    email,
    setEmail,
    password,
    setPassword,
    userDetails,
    userAuthDetails,
    user,
    logout,
    taskList,
    setTaskList,
    empTask,
    setEmpTask,
    startTask,
    setStartTask,
    completeTask,
    setCompleteTask,
    selectedTask,
    setSelectedTask,
    completedTask,
    setCompletedTask,
    showStart,
    setShowStart,
    showComplete,
    setShowComplete,
  };

  return <authContext.Provider value={data}>{children}</authContext.Provider>;
};

export default AuthContext;
