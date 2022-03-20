import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link, useHistory} from 'react-router-dom'
import Title from './helperComponents/Title';
import '../sass/Item.scss'
import itemService from '../services/items';
import Notification from './helperComponents/Notification';


function Item({user}) {
    const id = useParams().id; 
    const [loadedItem, setLoadedItem] = useState({
        content: '', id: '', private: '', user: ''
    }); 
    const [text, setText] = useState(''); 
    const [admin, setAdmin] = useState('public')
    const [message, setMessage] = useState(null)
    const [ backButton, setBackButton ] = useState('Back'); 

    const currentUser = user.username; 
    itemService.setToken(user.token)

    const changeText = (e) => {
        setText(e.target.value)
        setBackButton('Discard Changes')
    }

    const changeUserRights = e => {
        setAdmin(e.target.value)
    }

    useEffect ( ()=>{
        itemService.getItem(id).then(data =>{
            setLoadedItem(data);
            setText(data.content)
            setAdmin(data.private)
        })
    }, [id])

    const history = useHistory(); 

    const save = () => {
        if (text.length < 5) {
            setMessage({type: 'error-notification', msg: 'The item should have 5 characters or more'})
            setTimeout(()=>setMessage(null), 2000); 
        } else {
            const editedItem = {
                ...loadedItem, content: text, private: admin
            }
            itemService.updateItem(editedItem).then(data => {
                setMessage({type: 'success-notification', msg: 'Item successfully updated'})
                setTimeout(()=> {
                    setMessage(null)
                    history.push('/')
                }, 2000)
            })
        }
    }

    return (
        <div>
            <Title title='Edit Item'/>

            <div className='edit-box'>

                <div className='edit-id'>
                    <div>Item Id <input type='text' defaultValue={loadedItem.id} readOnly></input></div>
                    <div>User <input type='text' defaultValue={loadedItem.user} readOnly></input></div>
                </div>

                <div className='editable-fields'>

                    <div className='item-content'>
                        <p>Item content</p>
                        <textarea rows='8' placeholder='Item text' value={text} onChange={changeText}></textarea>
                    </div>

                    {
                        (currentUser === loadedItem.user) ? 
                        <div className='user-rights'>
                            User rights
                            <select value={admin} onChange={changeUserRights}>
                                <option value='public'>Public</option>
                                <option value='private'>Private</option>
                            </select>
                        </div>
                        : null
                    }
                </div>

                <Notification message={message} />
                
            </div>
            <div className='edit-buttons'>
                <Link to={'/'}><button className='login-clear'>{backButton}</button></Link>
                <button className='login-button' onClick={save}>Save</button>
            </div>
            
        </div>
    )
}

export default Item