import React from "react";
import EmpTaskCard from "./EmpTaskCard";

const CompleteTask = ({ completedTask }) => {
  console.log(completedTask, "Complete Task in CompleteTask Component");
  return completedTask.map((task, id) => {
    return (
      <EmpTaskCard
        task={task}
        key={id}
        showStart={false}
        showComplete={false}
      />
    );
  });
};

export default CompleteTask;
