import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/login'
const baseUrl = 'https://immense-scrubland-20832.herokuapp.com/api/login'

const login = async credentials => {
    const resp = await axios.post(baseUrl, credentials)
    return resp.data
}

const loginService = {
    login
}
export default loginService



