const INITIAL_STATE = { user: null, loading: false, error: '' }
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'login_attempt':
            return {...state, loading: true }
        case 'login_failed': 
            return {INITIAL_STATE, error: action.errorMsg}
        case 'login_success': 
            return {INITIAL_STATE, user: action.user}
        case 'register_attempt':
            return {...state, loading: true }
        default:
            return state;
    }
}