import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL

/**
 * An axios instance and its setting.
 */
const axiosInstance = axios.create({
    baseURL: baseURL,
})

export default axiosInstance