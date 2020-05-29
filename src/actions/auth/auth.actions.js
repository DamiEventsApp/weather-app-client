import { types, API } from "../components";

const logUserIn = (user, authToken) => ({
    type: types.LOGIN,
    user,
    authToken,
});

export const login = (form) => async(dispatch) => {
    try {
        const res = await API.post('/auth/login', form)
        const { data } = res;
        const { user, auth_token } = data;
        dispatch(logUserIn(user, auth_token))
    } catch(error) {
        console.log(error)
    }
};

export const logout = () => ({
    type: types.LOGOUT,
});