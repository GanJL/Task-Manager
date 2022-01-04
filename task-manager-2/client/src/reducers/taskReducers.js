import { TASK_LIST_FAIL, 
    TASK_LIST_REQUEST, 
    TASK_LIST_SUCCESS, 

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
