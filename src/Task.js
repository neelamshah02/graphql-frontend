import React from "react";


const Task = ({error, loading , data}) => {

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.fetchTasks.map(task => (
        <li>{task.task}</li>
      ))}
    </ul>
  );
};

export { Task };