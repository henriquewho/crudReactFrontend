import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/items'
const baseUrl = 'https://immense-scrubland-20832.herokuapp.com/api/items'

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

const getItem = async id => {
    const resp = await axios.get(`${baseUrl}/${id}`);
    return resp.data; 
}

const getAll = async user => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    const resp = await axios.get(`${baseUrl}`, config)

    return resp.data; 
}

const createItem = async item => {
    const config = configToken()
    const resp = await axios.post(`${baseUrl}`, item, config)
    return resp.data 
}

const updateItem = async item => {
    const config = configToken()
    const resp = await axios.put(`${baseUrl}/${item.id}`, item, config)
    return resp.data
}

const deleteItem = async id => {
    const config = configToken()
    const resp = await axios.delete(`${baseUrl}/${id}`, config)
    return resp.data; 
}

const itemService = {
    getItem, getAll, createItem, setToken, updateItem, deleteItem
}
export default itemService



