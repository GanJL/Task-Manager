import React from 'react'
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { listTasks } from '../../actions/taskActions';
import StatusLine from "../../components/StatusLine";
import Popup from "../../components/Popup";
import "../../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tasks = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const taskList = useSelector((state) => state.taskList);
    const [popped, isPopped] = useState(false);

    const taskDelete = useSelector((state) => state.taskDelete);
    const { success: successDelete } = taskDelete;
    const taskUpdate = useSelector((state) => state.taskUpdate);
    const { success: successUpdate } = taskUpdate;
    const taskCreate = useSelector((state) => state.taskCreate);
    const { success: successCreate } = taskCreate;

    const { userInfo } = userLogin

    const { tasks } = taskList

    const dispatch = useDispatch();

    const navigate = useNavigate();



    useEffect(()=>{
      
        dispatch(listTasks());
        if (!userInfo) {
          navigate("/")
        }

    }, [dispatch, userInfo, navigate, successDelete, successCreate, successUpdate]);

    const handleLogout = async (event) => {
        
        event.preventDefault();

        dispatch(logout())

        navigate("/");
        
    }

    return (
           
        <div>
          <div className='row'>
            <div className='col-sm-4'>
            <h1>Hello, {userInfo.name}</h1>
            </div>
            <div className='col-sm-4 text-center'>
            <h1>
              <button className="newbtn btn-4 mb-4" onClick={() => isPopped(true)}>Add Task</button>
            </h1>
            </div>
            <div className='col-sm-4 text-center'>
            <h1>
              <button className="newbtn btn-4 mb-4 logout" onClick={handleLogout}>Logout</button>
            </h1>
            </div>
          </div>
        <h4>Your tasks</h4>
        <div className='container text-center'>        
        </div>
        <div className="container-fluid task-box"> 
  
          <div className="row">

            <div className="col-md-4">
            <StatusLine
              tasks={tasks}
              status="Backlog"
            />
            </div>
            <div className="col-md-4">
            <StatusLine
              tasks={tasks}
              status="In Progress"
            />
            </div>
            <div className="col-md-4">
            <StatusLine
              tasks={tasks}
              status="Completed"
            /> 
            </div>
  
  
          </div>
          
          <br></br>
          { popped ? (<div><Popup popped={popped} isPopped={isPopped} poppedstatus={true}/></div>): ''}
          </div> 
      </div>
    )

}

export default Tasks
