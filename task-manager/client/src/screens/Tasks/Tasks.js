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
import Loading from "../../components/Loading"

const Tasks = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin
    const taskList = useSelector((state) => state.taskList);
    const { tasks, loading: loadingTask } = taskList
    const [popped, isPopped] = useState(false);
    const [isLogout, setLogout] = useState(false);
    const taskDelete = useSelector((state) => state.taskDelete);
    const { success: successDelete, loading: loadingDelete } = taskDelete;
    const taskUpdate = useSelector((state) => state.taskUpdate);
    const { success: successUpdate, loading: loadingUpdate } = taskUpdate;
    const taskCreate = useSelector((state) => state.taskCreate);
    const { success: successCreate, loading: loadingCreate } = taskCreate;




    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=>{
      
      if (!userInfo) {
        navigate("/login")
      }

      dispatch(listTasks());

    }, [dispatch, userInfo, navigate, successDelete, successCreate, successUpdate]);
    // stores the dependencies which if changed will activate useEffect


    const handleLogout = async (event) => {
        
        event.preventDefault();

        dispatch(logout())

        navigate("/login");
        
    }

    return (
           
        <div>
          <div className='row'>
            <div className='col-4'>
            {userInfo && <h1>Hello, {userInfo.name}</h1>}
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

            <div className="col-md-4 border-end border-secondary">
            <StatusLine
              tasks={tasks}
              status="Backlog"
            />
            </div>
            <div className="col-md-4 border-end border-secondary">
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

          {loadingTask && <Loading />}

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

