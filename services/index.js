import axios from 'axios'
export const api = {
    call: () => {
        return axios.create({
            baseURL: 'http://apiforlearning.zendvn.com/api/',
        });
        
    }
}