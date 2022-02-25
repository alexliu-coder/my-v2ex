import axios, {AxiosInstance} from "axios";

const _axios: AxiosInstance = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {'Authorization': 'Bearer 0d82d5a5-1acb-4e4a-a730-c947d42d1273'},
    withCredentials: true
})

export default _axios
