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
    TASK_UPDATE_FAIL,

} from "../constants/taskConstants"

export const taskListReducer = (state = { tasks: {} }, action) => {
    switch (action.type) {
        case TASK_LIST_REQUEST: 
            return {};
        case TASK_LIST_SUCCESS: 
            return { tasks: action.payload };
        case TASK_LIST_FAIL: 
            return { error: action.payload };
        default:
            return state;
    }
}


export const taskCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_CREATE_REQUEST: 
            return {};
        case TASK_CREATE_SUCCESS: 
            return { success: true };
        case TASK_CREATE_FAIL: 
            return { error: action.payload, success: false };
        default:
            return state;
    }
}

export const taskDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_DELETE_REQUEST: 
            return {};
        case TASK_DELETE_SUCCESS: 
            return { success: true };
        case TASK_DELETE_FAIL: 
            return { error: action.payload, success: false };
        default:
            return state;
    }
}

export const taskUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_UPDATE_REQUEST: 
            return {};
        case TASK_UPDATE_SUCCESS: 
            return { success: true };
        case TASK_UPDATE_FAIL: 
            return { error: action.payload, success: false };
        default:
            return state;
    }
}


