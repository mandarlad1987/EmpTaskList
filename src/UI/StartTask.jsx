import React from "react";
import EmpTaskCard from "./EmpTaskCard";

const StartTask = ({ selectedTask }) => {
  return selectedTask.map((task, id) => {
    return (
      <EmpTaskCard task={task} key={id} showStart={false} showComplete={true} />
    );
  });
};

export default StartTask;
