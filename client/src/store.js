import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { taskListReducer, taskCreateReducer, taskUpdateReducer, taskDeleteReducer} from './reducers/taskReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'persist-task',
    storage
}

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    taskList: taskListReducer,
    taskCreate: taskCreateReducer,
    taskUpdate: taskUpdateReducer,
    taskDelete: taskDeleteReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


const middleware = [thunk];

let store;

if (process.env.NODE_ENV === "production") {
    store = createStore(
        persistedReducer,
        compose(applyMiddleware(...middleware))
    )
}

else {
    store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}


const persistor = persistStore(store)

export default store;

export { persistor }