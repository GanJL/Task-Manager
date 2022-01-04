import React from 'react'
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { listTasks } from '../../actions/taskActions';
import StatusLine from "../../components/StatusLine";
import Popup from "../../components/Popup";

const Tasks = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const taskList = useSelector((state) => state.taskList);

    const [popped, isPopped] = useState(false);

    const { userInfo } = userLogin

    const { tasks } = taskList

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=>{
      
        dispatch(listTasks());
        if (!userInfo) {
          navigate("/")
        }

    }, [dispatch, userInfo, navigate ]);

    const handleLogout = async (event) => {
        
        event.preventDefault();

        dispatch(logout())

        navigate("/");
        
    }

    return (
           
        <div className="App">
        <h1>Task Manager by {userInfo.name}</h1>
        <h4>Your tasks</h4>
        <div className="btn btn-4 mb-4" onClick={() => isPopped(true)}>Add Task</div>
        <div className="container-fluid task-box">
  
          <div className="row">
            <div className="col-sm-4">
              <StatusLine
                tasks={tasks}
                status="Backlog"
              />
            </div>
            <div className="col-sm-4">
            <StatusLine
              tasks={tasks}
              status="In Progress"
            />
            </div>
            <div className="col-sm-4">
            <StatusLine
              tasks={tasks}
              status="Completed"
            />
            </div>
  
  
          </div>
          
          <br></br>
          { popped ? (<div><Popup popped={popped} isPopped={isPopped} poppedstatus={true}/></div>): ''}
          <button onClick={handleLogout}>logout</button>
          </div>
      </div>
    )

}

export default Tasks
