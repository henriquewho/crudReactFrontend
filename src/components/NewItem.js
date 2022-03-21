import React, {useState} from 'react'
import Title from './helperComponents/Title'
import '../sass/NewItem.scss'
import { Link, useHistory } from 'react-router-dom'
import itemService from '../services/items'
import Notification from './helperComponents/Notification'

function NewItem({user}) {
    const [text, setText] = useState('')
    const [rights, setRights] = useState('public')
    const [message, setMessage] = useState(null)

    let currUser = user; 
    const history = useHistory()

    const changeText = e => {
        setText(e.target.value)
    }

    const changeRights = e => {
        setRights(e.target.value)
    }

    const create = () => {
        if (text.length < 5) {
            setMessage({type: 'error-notification', msg: 'The item should have 5 characters or more'})
            setTimeout(()=>setMessage(null), 2000); 
            return;
        }

        itemService.setToken(currUser.token)
        itemService.createItem({text, rights, user: currUser['username'] }).then(data => { 
            setMessage({type: 'success-notification', msg: 'Item successfully created'})
            setTimeout(()=>{
                //history.push('/')
                setMessage(null)
                history.push('/crudReactFrontend')
            }, 2000); 
        })
    }

    return (
        <div>
            <Title title='Add a new item' />
            <div className='new-item-box'>
                <div className='editable-fields'>
                    
                    <div className='item-content'>
                        <p>Item content</p>
                        <textarea rows='8' placeholder='Item text' value={text} onChange={changeText}></textarea>
                    </div>

                    <div className='user-rights'>
                        User rights
                        <select value={rights} onChange={changeRights}>
                            <option value='public'>Public</option>
                            <option value='private'>Private</option>
                        </select>
                    </div>
                    <Notification message={message}/> 
                </div>
                <div className='edit-buttons'>
                    <Link to={'/'}><button className='login-clear'>Cancel</button></Link>
                    <button className='login-button' onClick={create}>Create New</button>
                </div>
            </div>
        </div>
    )
}

export default NewItem
