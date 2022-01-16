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

export const listTasks = () => async (dispatch, getState) => {

    try {

          dispatch({ type: TASK_LIST_REQUEST });
   
          const { userLogin: {userInfo}, } = getState()

          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
      
          const { data } = await axios.get(`/api/tasks`, config);

          dispatch({ type: TASK_LIST_SUCCESS, payload: data })

        }

    catch (error)  {

      const message =
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({
          type: TASK_LIST_FAIL,
          payload: message,
        });
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

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/tasks/create`,
        { title, description, urgency, status },
        config
      );

      dispatch({ type: TASK_CREATE_SUCCESS, payload: data })

    } catch (error) {

      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
        dispatch({
          type: TASK_CREATE_FAIL,
          payload: message,
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
  
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/tasks/${id}`, config);

      dispatch({ type: TASK_DELETE_SUCCESS, payload: data })
          
      
  
    } catch (error) {

      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
        dispatch({
          type: TASK_DELETE_FAIL,
          payload: message,
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
  

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/tasks/${id}`,
        editedTask,
        config
      );

      dispatch({ type: TASK_UPDATE_SUCCESS, payload: data })
            
    } catch (error) {

      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
        dispatch({
          type: TASK_UPDATE_FAIL,
          payload: message,
      });
    }
}
