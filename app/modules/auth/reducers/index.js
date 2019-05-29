import { combineReducers } from 'redux'

import AuthReducers from './reducer'

export default combineReducers({
    auth: AuthReducers
})