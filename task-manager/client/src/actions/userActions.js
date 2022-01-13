import { USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS 
} from "../constants/userConstants"



const API_BASE = "http://localhost:5000"

export const login = (email, password) => async (dispatch) => {

    try {

            dispatch({ type: USER_LOGIN_REQUEST });

            const data  = await fetch(API_BASE + "/api/users/login", {
        
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),

              }).then(res => res.json())


            if (!data.errors){

                dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

            }
            else {

                dispatch({
                    type: USER_LOGIN_FAIL,
                    payload:
                        data.errors
                })

            }

        }

        catch (error)  {

            dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                    error
            })

        }
}

export const register = (email,password,name) => async (dispatch) => {

    try {

            dispatch({ type: USER_REGISTER_REQUEST });


            const data  = await fetch(API_BASE + "/api/users/register", {
        
                method: "POST",

                headers: {
                    'Content-Type': 'application/json',
                },
 
                body: JSON.stringify({email,password,name})
        
              }).then(res => res.json())


            if (!data.errors){

                dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

                dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

            }

        }
    catch (error)  {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                    error
            })
        }
}

export const logout = () => async (dispatch) => {

   dispatch({type: USER_LOGOUT})
   
}
