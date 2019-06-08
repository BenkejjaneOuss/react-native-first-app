import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: 'login_attempt' })

        //Call the back-end
        axios.post('https://rest-api-express-mongo.herokuapp.com/user/login', {email: email, password})
            .then(resp => handleResponse(dispatch, resp.data))
            .catch(err => console.error(err))
    }
    
}

const handleResponse = (dispatch, data) => {
    if(!data.success) {
        dispatch({ type: 'login_failed', errorMsg: data.message })
    } else {
        AsyncStorage.setItem('auth_token', data.user.token)
        .then(() => {
            console.log('ee')
            dispatch({ type: 'login_success', user: data.user})
        }) 
        
    }
}

export const registerUser = ({ name, email, password }) => {
    return (dispatch) => {
        dispatch({ type: 'register_attempt' })

        //Call the back-end
        axios.post('https://rest-api-express-mongo.herokuapp.com/user/register', { name, email, password })
            .then(resp => console.log(resp.data))
            .catch(err => console.error(err))
    }
    
}