import React from 'react'
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { listTasks } from '../../actions/taskActions';
import StatusLine from "../../components/StatusLine";
import Popup from "../../components/Popup";
import "../../styles/style.css";
import logoutLogo from '../../icons/logout-svgrepo-com.svg';
import addLogo from '../../icons/add-svgrepo-com.svg';
import Footer from "../../components/Footer";

const Tasks = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const taskList = useSelector((state) => state.taskList);
    const [popped, isPopped] = useState(false);
    const [isLogout, setLogout] = useState(false);
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
            <div className='col-4'>
            <h1>Hello, {userInfo.name}</h1>
            </div>
            <div className='col-4 text-center'>
            <h1>
              <button className="newbtn btn-4 mb-4" onClick={() => isPopped(true)}>
              <img className="addLogo container text-center" src={addLogo}/>
                <span className="align-middle">Add Task</span></button>
            </h1>
            </div>
            <div className='col-4 text-end'>
              <button className="newbtn btn-4 mb-4" onClick={() => setLogout(true)}>
                <img className="logoutLogo container text-center" src={logoutLogo}/>
                <span className="align-middle">Log out</span>
              </button>
            </div>
          </div>
        <h4>Your tasks</h4>
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
          {isLogout && 
            (<div className="popupBackground">
              <div className="popup">
                <div className="closePopup" onClick={() => setLogout(false)}>X</div>
                <div className="popupHeader text-center">Log out</div>
                <div className="task text-center">Are you sure?</div>
                <div className="row justify-content-center">
                <button onClick={handleLogout} className="newbtn btn-4 col-3 m-1">Yes</button>
                <button onClick={() => setLogout(false)} className="newbtn btn-4 col-3 m-1">No</button>
                </div>
              </div>
            </div>)}
          </div> 
          <Footer />
      </div>
    )

}

export default Tasks
