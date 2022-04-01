import axios from "axios";

const API = axios.create({
    baseURL: "http://10.0.0.4:8080/api/v1",
    headers: { "Accept": "application/json", "Content-Type": "application/json" }
});

API.interceptors.request.use((request) => {
    if (localStorage.getItem("profile")) request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile"))}`;
    return request;
});

export const signin = async (signinForm) => {
    return await API.post("/users/signin/", signinForm);
};

export const signup = async (signupForm) => {
    return await API.post("/users/signup/", signupForm);
};

export const createMessage = async (message) => {
    return await API.post("/messages/create/", { message: message });
};

export const getMessages = async () => {
    return await API.post("/messages/");
};

export const deleteMessage = async (messageID) => {
    return await API.post("/messages/delete/", { id: messageID });
};
