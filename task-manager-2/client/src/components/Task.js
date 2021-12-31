import { useState } from "react";
import Popup from "./Popup";
import "../styles/task.scss";

export default function Task(props) {

  const {deleteTask, task, addTask, updateTask} = props;
  const [popped, isPopped] = useState(false);
  
  let taskUrgency

  if (task.urgency === 'Low'){
    taskUrgency = 'bg-success text-white'
  }
  else if (task.urgency === 'Medium'){
    taskUrgency = 'bg-warning text-dark'
  }
  else {
    taskUrgency = 'bg-danger text-white'
  }

  return (

    <div className="container-fluid task-style mb-3">

      <div className="fs-5">{task.title}</div>

      <div className="wrapper mt-2 mb-2">

        <div className="fs-7">{task.description}</div>

      </div>

      <div className={`text-center badge fs-7 mt-2 ${taskUrgency}`}>{task.urgency}</div>

      <div className="mt-3 text-center">

          <div className="btn btn-4 me-5" onClick={() => isPopped(true)}>Edit</div>

          <div className="btn btn-4" onClick={() => deleteTask(task._id)}>Delete</div>

          { popped ? (<Popup popped={popped} isPopped={isPopped} addTask={addTask} updateTask={updateTask} task={task} poppedstatus={false}/>): ''}
          
      </div>

    </div>
    
  );
}