import axios from "axios";

// import logger from "./logService";

import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.log("Logging error message:", error);
        // alert("Unexpected error occured.");

        // logger.log(error)

        toast.error("Unexpected error occured.");
        // toast("Unexpected error occured.");
    }

    return Promise.reject(error);
});

// export default {
//     get: axios.get,
//     post: axios.post,
//     put: axios.put,
//     patch: axios.patch,
//     delete: axios.delete,
// };

const exportedObject = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
};

export default exportedObject;