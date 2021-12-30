// import "../styles/task.scss";
import "../styles/style.css";
import { useState } from "react";

export default function Popup({popped,isPopped,addTask,updateTask,task,poppedstatus}) {

    if (task === undefined) {

        task = {
            title: "",
            description: "",
            urgency: "",
            status: ""
        }
    }

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
    
        addTask(newTasktoAdd)

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
    

        updateTask(task._id,EditedTask)

        isPopped(false)

        window.location.reload();



    }



    return (
        <div>
		{popped ? (
            <div className="popup">
            <div className="closePopup" onClick={() => isPopped(false)}>X</div>
            <div className="content">
                <h3>Add Task</h3>
                    <div className="task collapsedTask">
                        <form>
                            <input
                                type="text"
                                className="title input"
                                name="title"
                                placeholder="Enter Title"
                                onChange={e => setTitle(e.target.value)}
                                value={title}

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
                                <label className="low">
                                <input type="radio" onChange={e => setUrgencyLevel(e.target.value)} value="Low" /> Low
                                </label>
                                <label className="medium">
                                <input type="radio" onChange={e => setUrgencyLevel(e.target.value)} value="Medium" /> Medium
                                </label>
                                <label className="high">
                                <input type="radio" onChange={e => setUrgencyLevel(e.target.value)} value="High" /> High
                                </label>
                            </div>
                            <div className="urgencyLabels">
                                <label className="high">
                                <input type="radio" onChange={e => setStatusLevel(e.target.value)} value="Backlog" /> Backlog
                                </label>
                                <label className="high">
                                <input type="radio" onChange={e => setStatusLevel(e.target.value)} value="In Progress" /> In Progress
                                </label>
                                <label className="high">
                                <input type="radio" onChange={e => setStatusLevel(e.target.value)} value="Completed" /> Completed
                                </label>
                            </div>

                            
                            {poppedstatus ? (<button onClick={handleAdd} className="button" >Create Task</button>) : 
                            <button onClick={handleEdit} className="button" >Update Task</button>}
                        </form>
                    </div>
            </div>
        </div> ): ''}
        </div>
    );
}
