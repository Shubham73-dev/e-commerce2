import axios from 'axios'

const customAxios = {
    get(url){
        return axios.get(url)
    }
}

export default customAxios;