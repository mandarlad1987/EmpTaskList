import React, { createContext, useState, useEffect } from 'react'
import { getUserDetails } from '../localStorage/LocalStorage';

export const authContext = createContext();

const AuthContext = ({children}) => {

    const tasks = [
    {
      title: "Design Homepage",
      date: "2025-06-30",
      assignTo: "Rahul Sharma",
      category: "Design",
      description: "Create a modern homepage layout for the new project."
    },
    {
      title: "API Integration",
      date: "2025-07-02",
      assignTo: "Priya Mehta",
      category: "Development",
      description: "Integrate employee API with dashboard."
    }
  ];
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
        tasks
    };

    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;