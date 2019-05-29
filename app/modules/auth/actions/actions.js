export const loginUser = ({ username, password }) => {
    console.log('Action - Username : '+username+' & password : '+password);
    return {
        type: 'login_attempt'
    }
}