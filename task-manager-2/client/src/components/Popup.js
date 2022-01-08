import { useState } from "react";
import { createTaskAction, updateTaskAction } from "../actions/taskActions"
import { useDispatch } from 'react-redux'
import "../styles/style.css";

export default function Popup({popped,isPopped,task,poppedstatus}) {

    if (task === undefined) {

        task = {
            title: "",
            description: "",
            urgency: "",
            status: ""
        }
    }
    const dispatch = useDispatch();


    const [description, setDescription] = useState(task.description);
    const [title, setTitle] = useState(task.title);
    const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
    const [statusLevel, setStatusLevel] = useState(task.status);


    const handleAdd = (event) => {
    
        event.preventDefault()
    
        const newTasktoAdd = {

              title: title,
              description: description,
              urgency: urgencyLevel,
              status: statusLevel,

            }
    
        dispatch(createTaskAction(newTasktoAdd))

        isPopped(false)

    }

    const handleEdit = (event) => {
    
        event.preventDefault()
    
        const EditedTask = {
            
            title: title,
            description: description,
            urgency: urgencyLevel,
            status: statusLevel,

            }
    

        dispatch(updateTaskAction(EditedTask,task._id,))

        isPopped(false)

        // window.location.reload();

    }

    return (
        <div className="popupBackground">
		{popped ? (
            <div className="popup text-center">

                    <div className="closePopup" onClick={() => isPopped(false)}>X</div>
                        {poppedstatus ? <div className="popupHeader">Add Task</div> : <div className="popupHeader">Edit Task</div>}
                            <div className="task">
                                <form>
                                    <input
                                        type="text"
                                        className="title input mb-2"
                                        name="title"
                                        placeholder="Enter Title"
                                        onChange={e => setTitle(e.target.value)}
                                        value={title}
                                        className="popupInput"

                                    />
                                    <textarea
                                        rows="2"
                                        className="description input"
                                        name="description"
                                        placeholder="Enter Description"
                                        onChange={e => setDescription(e.target.value)}
                                        value={description}
                                    />
                                    <div className="urgencyLabels">
                                        <label className={`low ${urgencyLevel === "Low" ? "selected" : ""}`}>
                                        <input type="radio" onChange={e => setUrgencyLevel(e.target.value)} value="Low" className="displayNone popupInput"/> Low
                                        </label>
                                        <label className={`medium ${urgencyLevel === "Medium" ? "selected" : ""}`}>
                                        <input type="radio" onChange={e => setUrgencyLevel(e.target.value)} value="Medium" className="displayNone popupInput"/> Medium
                                        </label>
                                        <label className={`high ${urgencyLevel === "High" ? "selected" : ""}`}>
                                        <input type="radio" onChange={e => setUrgencyLevel(e.target.value)} value="High" className="displayNone popupInput"/> High
                                        </label>
                                    </div>
                                    <div className="urgencyLabels">
                                        <label className={`high ${statusLevel === "Backlog" ? "selected" : ""}`}>
                                        <input type="radio" onChange={e => setStatusLevel(e.target.value)} value="Backlog" className="displayNone popupInput"/> Backlog
                                        </label>
                                        <label className={`medium ${statusLevel === "In Progress" ? "selected" : ""}`}>
                                        <input type="radio" onChange={e => setStatusLevel(e.target.value)} value="In Progress" className="displayNone popupInput"/> In Progress
                                        </label>
                                        <label className={`low ${statusLevel === "Completed" ? "selected" : ""}`}>
                                        <input type="radio" onChange={e => setStatusLevel(e.target.value)} value="Completed" className="displayNone popupInput"/> Completed
                                        </label>
                                    </div>

                                    <div className="text-center">
                                    {poppedstatus ? (<button onClick={handleAdd} className="newbtn" >Create Task</button>) : 
                                    <button onClick={handleEdit} className="newbtn" >Update Task</button>}
                                    </div>
                                </form>
                            </div>

            </div> ): ''}
        </div>
    );
}
