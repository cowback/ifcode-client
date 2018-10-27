import axios from 'axios';
const baseURL = `${process.env.API}/api/v1`

class HttpService {
    post(url, data) {
        return axios.post(`${baseURL}/${url}`, data)
    }

    get(url) {
        return axios.get(`${baseURL}/${url}`)
    }
}

export default new HttpService()