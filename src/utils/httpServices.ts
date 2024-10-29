import axios, { AxiosInstance } from "axios";
import { toast } from "react-toastify";
import { getCookiesItem } from "./localstorageService";
import { useRouter } from "next/navigation";

// Create an Axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const _token = getCookiesItem("_admin_token");
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${_token}`;
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const object = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};
export default object;
