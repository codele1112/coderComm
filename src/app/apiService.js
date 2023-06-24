import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (request) => {
    const currentToken = window.localStorage.getItem("accessToken");
    if (currentToken) {
      request.headers.Authorization = `Bearer ${currentToken}`;
    }
    console.log("Start Request", request);

    return request;
  },
  function (error) {
    console.log("Request Error", { error });
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("Response Error", { error });
    const message = error.response?.data?.errors.message || "Unknown error";

    return Promise.reject({ message });
  }
);
export default apiService;
