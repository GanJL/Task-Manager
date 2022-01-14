import { useState } from "react";
import Popup from "./Popup";
import { deleteTaskAction } from "../actions/taskActions"
import { useDispatch } from 'react-redux'

export default function Task(props) {

  const { task } = props;

  const [isDelete, setDelete] = useState(false);

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

      <hr className="my-2"></hr>
      
      <div className="wrapper mt-2 mb-2">

        <div className="fs-7">{task.description}</div>

      </div>

      <div className={`text-center badge fs-7 my-2 ${taskUrgency}`}>{task.urgency}</div>

        <div className="row justify-content-center">

          <button className="newbtn btn-4 col-3 m-1" onClick={() => isPopped(true)}>Edit</button>

          <button className="newbtn btn-4 col-3 m-1" onClick={()=>setDelete(true)}>Delete</button>
        
        </div>
          { popped ? (<Popup popped={popped} isPopped={isPopped} task={task} poppedstatus={false}/>): ''}
          
        {isDelete && 
          (<div className="popupBackground">
            <div className="popup">
              <div className="closePopup" onClick={() => setDelete(false)}>X</div>
              <div className="popupHeader text-center">Delete Task</div>
              <div className="task text-center">Are you sure you want to delete task <br></br>"{task.title}"?</div>
              <div className="row justify-content-center">
              <button onClick={handleDelete} className="newbtn btn-4 col-3 m-1">Yes</button>
              <button onClick={() => setDelete(false)} className="newbtn btn-4 col-3 m-1">No</button>
              </div>
            </div>
          </div>)}

    </div>
    
  );
}