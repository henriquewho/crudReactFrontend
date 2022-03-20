import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/users'
const baseUrl = 'https://immense-scrubland-20832.herokuapp.com/api/users'; 

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`; 
}

const configToken = () => {
    return {
        headers: {
            Authorization: token
        }
    }
}
const update = async user => {
    const config = configToken(); 
    const resp = await axios.put(baseUrl+`/${user.id}`, user, config)
    return resp.data; 
}

const create = async user => {
    const config = configToken(); 
    const resp = await axios.post(baseUrl, user, config)
    return resp.data; 

}

const userService = {
    update, create, setToken
}

export default userService


