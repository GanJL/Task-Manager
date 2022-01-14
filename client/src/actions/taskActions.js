import { TASK_LIST_FAIL, 
    TASK_LIST_REQUEST, 
    TASK_LIST_SUCCESS, 
    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,
    TASK_DELETE_REQUEST,
    TASK_UPDATE_REQUEST,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAIL

} from "../constants/taskConstants"
import axios from "axios";

const API_BASE = "http://localhost:5000"



export const listTasks = () => async (dispatch, getState) => {

    try {

          dispatch({ type: TASK_LIST_REQUEST });
   
          const { userLogin: {userInfo}, } = getState()

          const data  = await fetch(API_BASE + "/api/tasks", {
        
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}` 
            },
        
          }).then(res => res.json())

          if (!data.errors){

            dispatch({ type: TASK_LIST_SUCCESS, payload: data })

          }

        }
    catch (error)  {

          dispatch({

            type: TASK_LIST_FAIL,
            payload:
                error
            })
        }
}

export const createTaskAction = (title, description, urgency, status) => async (

    dispatch,
    getState

  ) => {

    try {

      dispatch({
        type: TASK_CREATE_REQUEST,
      });

      const {
        
        userLogin: { userInfo },

      } = getState();

      const data  = await fetch(API_BASE + "/api/tasks/create", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}` 
        },

        body: JSON.stringify(title, description, urgency, status)

      }).then(res => res.json())

      if (!data.errors){

        dispatch({ type: TASK_CREATE_SUCCESS, payload: data })

      }

    } catch (error) {

      dispatch({

        type: TASK_CREATE_FAIL,
        payload: error.response,

      });
    }
  };
  
  export const deleteTaskAction = (id) => async (dispatch, getState) => {

    try {

      dispatch({
        type: TASK_DELETE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
  
  
      const data  = await fetch(API_BASE + `/api/tasks/${id}`, {
        
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}` 
        },

      }).then(res => res.json())

      if (!data.errors){

          dispatch({ type: TASK_DELETE_SUCCESS, payload: data })
          
      }
  
    } catch (error) {

      dispatch({

        type: TASK_DELETE_FAIL,
        payload: error.response,

      });
    }
  };
  
  export const updateTaskAction = (editedTask,id) => async (

    dispatch,
    getState

  ) => {

    try {

      dispatch({
        type: TASK_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
  

      const data  = await fetch(API_BASE + `/api/tasks/${id}`, {
        
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}` 
        },

        body: JSON.stringify(editedTask)

      }).then(res => res.json())

      if (!data.errors){
          dispatch({ type: TASK_UPDATE_SUCCESS, payload: data })
          
      }
  
    } catch (error) {

          dispatch({
            type: TASK_UPDATE_FAIL,
            payload: error.response,
            
          });
    }
}
