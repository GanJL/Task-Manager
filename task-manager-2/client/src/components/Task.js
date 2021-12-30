// import "../styles/task.scss";
import { useState } from "react";
import Popup from "./Popup";

export default function Task(props) {

  const {deleteTask, task, addTask, updateTask} = props;
  // const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState({});
  const [popped, isPopped] = useState(false);
  // const [formAction, setFormAction] = useState("");
  // const [description, setDescription] = useState("");
  // const [title, setTitle] = useState("");
  // const [urgencyLevel, setUrgencyLevel] = useState("");
  // const [statusLevel, setStatusLevel] = useState("");

  return (
    <div className="">

      <div className="text row">{task.title}</div>

      <div className="row">{task.description}</div>

      <div className="row">{task.urgency}</div>
      <hr></hr>
      <div className="row flex">
        <div className="button" onClick={() => isPopped(true)}>Edit</div>
        <div className="button" onClick={() => deleteTask(task._id)}>Delete</div>
        { popped ? (<div><Popup popped={popped} isPopped={isPopped} addTask={addTask} updateTask={updateTask} task={task} poppedstatus={false}/></div>): ''}
      </div>
      



    </div>
    
  );
}