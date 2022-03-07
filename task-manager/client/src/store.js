import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { taskListReducer, taskCreateReducer, taskUpdateReducer, taskDeleteReducer} from './reducers/taskReducers';


// combine reducers into one function that can be passed to createStore
const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    taskList: taskListReducer,
    taskCreate: taskCreateReducer,
    taskUpdate: taskUpdateReducer,
    taskDelete: taskDeleteReducer,
})


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// store initial state with userInfo from store
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

// allow dispatch and getState to be called within action creators by writing additional redux logic separate from a UI layer
const middleware = [thunk];

let store;

// remove composeWithDevTools to prevent incompatiblilty with iOS Safari browser
if (process.env.NODE_ENV === "production") {
    store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(...middleware))
    )
}

else {
    store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}

export default store;

