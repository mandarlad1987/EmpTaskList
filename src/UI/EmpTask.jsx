import React, { useContext } from "react";
import EmpTaskCard from "./EmpTaskCard";
import { authContext } from "../context/AuthContext";

const EmpTask = ({ myTasks, setMyTasks }) => {
  const { showStart, showComplete } = useContext(authContext);
  return myTasks.map((task, id) => {
    return (
      <EmpTaskCard
        task={task}
        key={id}
        setMyTasks={setMyTasks}
        myTasks={myTasks}
        showStart={true}
        showComplete={false}
      />
    );
  });
};

export default EmpTask;
