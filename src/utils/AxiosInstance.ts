/***
 * An utility as a dedicated data-fetching function.
 */

import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
})

export default AxiosInstance

