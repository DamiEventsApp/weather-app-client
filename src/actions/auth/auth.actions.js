import { types, API } from "../components";
import { showMessage, hideMessage } from "../messages/messages.actions";

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
        if (error.message === "Request failed with status code 401")
        dispatch(showMessage("Invalid Credentials"));
        setTimeout(() => {
          dispatch(hideMessage());
        }, 1000);
    }
};

export const logout = () => ({
    type: types.LOGOUT,
});