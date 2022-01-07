import { useState } from "react";
import Popup from "./Popup";
// import "../styles/task.scss";
import { deleteTaskAction } from "../actions/taskActions"
import { useDispatch, useSelector } from 'react-redux'
import "../styles/style.css";


export default function Task(props) {

  const { task } = props;


  const [popped, isPopped] = useState(false);

  const dispatch = useDispatch();

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


  const handleDelete = async (event) => {
    
    event.preventDefault();

    dispatch(deleteTaskAction(task._id))

  }

  return (

    <div className="container-fluid task-style mb-3">

      <div className="fs-5">{task.title}</div>

      <div className="wrapper mt-2 mb-2">

        <div className="fs-7">{task.description}</div>

      </div>

      <div className={`text-center badge fs-7 mt-2 ${taskUrgency}`}>{task.urgency}</div>

      <div className="pt-3 container">

        <div className="row justify-content-center">

          <button className="newbtn btn-4 col-sm-3 m-1" onClick={() => isPopped(true)}>Edit</button>

          <button className="newbtn btn-4 col-sm-3 m-1" onClick={handleDelete}>Delete</button>
        
        </div>
          { popped ? (<Popup popped={popped} isPopped={isPopped} task={task} poppedstatus={false}/>): ''}
          
      </div>

    </div>
    
  );
}