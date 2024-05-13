import axios from "axios";
import store from './../store/store';
import { changeLoader } from "../store/action";


 const axiosInstance = axios.create({ 
    baseURL:'https://fakestoreapi.com'
})


// // Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch(changeLoader(true))
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(changeLoader(false))
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export default axiosInstance



// import axios from "axios";
// import store from './../store/store';
//  import { changeLoader } from "../store/action";

// const axiosInstance = axios.create({
//     baseURL: "https://fakestoreapi.com"
// });

// axiosInstance.interceptors.request.use(
//     function (config) {
//         store.dispatch(changeLoader(true));
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// axiosInstance.interceptors.response.use(
//     function (response) {
//         store.dispatch(changeLoader(false));
//         return response;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;