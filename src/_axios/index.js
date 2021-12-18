import axios from "axios";

const handleRequestFullfilled = (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    // if (JSON.stringify(config) === JSON.stringify(requestCache)) {
    //     throw new Error("skip");
    // } else {
    //     requestCache = Object.assign({}, config);
    // }
    return config;
};
const handleReqRejected = (error) => {
    return Promise.reject(error);
};

export const handleRespFullfilled = (response) => {
    return response;
};

export const handleRespRejected = (error) => {
    if (!error.response) {
        return Promise.resolve({
            data: {
                ok: false,
            },
        });
    }
    return {
        status: error.response.status,
        data: error.response.data,
    };
};

const apiUrl = process.env.NEXT_PUBLIC_API;
// const apiUrl = "https://api.rentacloth.net";
const api = axios.create({
    baseURL: apiUrl,
    timeout: 100000,
    headers: Object.assign({
        "Content-Type": "application/json",
    }),
});

api.interceptors.request.use(handleRequestFullfilled, handleReqRejected);
api.interceptors.response.use(handleRespFullfilled, handleRespRejected);

export default api;
