import React, {useState, useEffect} from 'react'
import Title from './helperComponents/Title'
//import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import itemService from '../services/items'
import '../sass/Items.scss'
import Notification from './helperComponents/Notification'

import { FaTrashAlt, FaEdit } from 'react-icons/fa'

function Items({user}) {
    const [allItems, setAllItems] = useState([])
    const currentUser = user; 
    itemService.setToken(currentUser.token)

    useEffect(()=>{
        itemService.getAll(currentUser.username).then(data=>{
            setAllItems(data)
        })
    }, [currentUser.username])

    return (
        <div>
            <Title title='All Items' />
            
            <ItemList items={allItems} setAllItems={setAllItems} user={user}/>

        </div>
    )
}

const ItemList = ({items, setAllItems, user}) => {

    const [message, setMessage] = useState(null)
    const currentUser = user; 
    itemService.setToken(currentUser.token)

    const handleDelete = (id, eachUser) => {
        
        if ((eachUser !== currentUser.username) && (currentUser.username!=='admin')){
            setMessage({type: 'error-notification items-page-notification', msg: 'Only the owner can delete an item'})
            setTimeout(()=>setMessage(null), 2000); 
            return; 
        }
        
        if (window.confirm(`Are you sure you want to delete the item with ID ${id}?`)) {
            itemService.deleteItem(id).then(data => {
                setAllItems(items.filter(item => item.id !== id))
                setMessage({type: 'success-notification items-page-notification', msg: 'The item was deleted'})
                setTimeout(()=>setMessage(null), 2000); 
            })
        }
    }

    return (
        <div> 
            <Notification message={message} /> 
            <table className='items-table'> 
                
                <tbody>
                    <tr>
                        <th className='table-id'>ID</th>
                        <th>Item</th>
                        <th>User</th>
                        <th>Delete</th>
                        <th>Details / Edit</th>
                    </tr>
                    {
                        items.map( each => {
                            return <tr key={each.id}>
                                <td className='table-id'> {each.id} </td>
                                <td> {each.content}  </td> 
                                <td> {each.user} </td>

                                <td className='items-delete-column'> <FaTrashAlt className='item-icon' onClick={()=>handleDelete(each.id, each.user)}/> </td>

                                <td className='items-edit-column'> <Link to={`/item/${each.id}`}><FaEdit className='item-icon'/> </Link> </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> 
        </div>
    )
}

export default Items
