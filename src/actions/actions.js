import * as calls from "../api/axiosApiCalls";

export const signin = (username, password) => {
    const signinForm = {
        username: username, 
        password: password
    };

    const response = calls.signin(signinForm);
    return response.then(r => {
        localStorage.setItem("profile", JSON.stringify(r.data));
        return "OK";
    }).catch(e => {
        if (e.response) return e.response.data; 
        else if (e.request) return e.request;
        else return e.message;
    });
};

export const signup = (username, password) => {
    const signupForm = {
        username: username,
        password: password
    };

    const response = calls.signup(signupForm);
    return response.then(r => {
        return "OK";
    }).catch(e => {
        if (e.response) return e.response.data;
        else if (e.request) return e.request;
        else return e.message;
    });
};

export const createMessage = (message) => {
    const response = calls.createMessage(message);
    return response.then(r => {
        return "OK";
    }).catch(e => {
        if (e.response) return e.response.data;
        else if (e.request) return e.request;
        else return e.message;
    });
};

export const getMessages = () => {
    const response = calls.getMessages();
    return response.then(r => {
        return r.data;
    }).catch(e => {
        return "BAD";
    });
};

export const deleteMessage = (messageID) => {
    const response = calls.deleteMessage(messageID);
    return response.then(r => {
        return "OK";
    }).catch(e => {
        if (e.response) return e.response.data;
        else if (e.request) return e.request;
        else return e.message;
    });
};
