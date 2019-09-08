import axios from "axios";

import AsyncStorage from '@react-native-community/async-storage';
import { API , setAuthToken} from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const TOKEN_NAME = 'mern_todo_app_token'

export const signUpAction = (userData, history) => {
    return async dispatch => {
        dispatch(setUserLoading())
        await API.post("/user/register", userData)
            .then(res => {
                if(res.data.success) {
                    dispatch(setNewUser());
                    //history.push("/login");
                }else{
                    dispatch({ 
                        type: 'AUTH_FAILED', 
                        errorMsg: res.data.message
                    })
                }
                //history.push("/login")
            }) // re-direct to login on successful register
            .catch(err =>
                dispatch({ 
                    type: 'AUTH_FAILED', 
                    errorMsg: 'Error, please try again' 
                })
            );
    };
}

export const signInAction = request_data => {
    return async dispatch => {
        dispatch(setUserLoading())
        console.log(request_data)
        await API.post('/user/login', request_data)
        .then(res => {
            console.log("axios");
            if(res.data.success) {
                console.log("axios ok");

                    AsyncStorage.setItem(TOKEN_NAME, res.data.user.token)
                        .then(() => {
                            setAuthToken(res.data.user.token);
                            // Decode token to get user data
                            const decoded = jwt_decode(res.data.user.token);
                            // Set current user
                            dispatch(setCurrentUser(decoded));
                        })                     
                    
                }else{
                    dispatch({ 
                        type: 'AUTH_FAILED', 
                        errorMsg: res.data.message
                    })
                }

            })
            .catch(err => 
                dispatch({ 
                    type: 'AUTH_FAILED', 
                    errorMsg: 'Error, please try again' 
                })
                )
    }
}


export const setCurrentUser = decoded => {
    return {
      type: 'AUTH_SUCCESS',
      payload: decoded
    };
};

export const setUserLoading = () => {
    return {
      type: 'AUTH_LOADING'
    };
};

export const setNewUser = () => {
    return {
      type: 'AUTH_REGISTER_SUCCESS'
    };
};

export const logoutUser = () => dispatch => {
    // Remove token from local storage
    AsyncStorage.removeItem(TOKEN_NAME)
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch({ type: 'AUTH_LOGGEDOUT' });
    //history.push("/login");
};
