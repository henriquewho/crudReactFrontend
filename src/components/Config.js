import React, {useState} from 'react'
import Title from './helperComponents/Title'
import Notification from './helperComponents/Notification'
import userService from '../services/users';
import '../sass/Config.scss'

function Config({user}) {

    let currUser = user; 
    userService.setToken(user.token)
    const [username, setUsername] = useState('')
    const [newPass, setNewPass] = useState('')
    const [admin, setAdmin] = useState(false)
    const [newPass1, setNewPass1] = useState('')
    const [newPass2, setNewPass2] = useState('')
    const [message, setMessage] = useState(null)

    const create = e => {

        if ((username.length===0) || (newPass===0)){
            setMessage({type: 'error-notification', msg: 'Fill the Username and Password'})
            setTimeout(()=>setMessage(null), 3000)
        } else if (newPass.length<5){
            setMessage({type: 'error-notification', msg: 'The password should have 5 characters or more'})
            setTimeout(()=>setMessage(null), 3000)
        } else if ( username.indexOf(' ')!==-1 || newPass.indexOf(' ')!==-1 ) {
            setMessage({type: 'error-notification', msg: 'The user / password should not have empty spaces'})
            setTimeout(()=>setMessage(null), 3000)
        } else {

            const newUser = {
                username, name: username, password: newPass, admin
            }
            userService.create(newUser).then(data => {
                document.getElementsByClassName('checkbox')[0].checked = false; 
                setUsername(''); setNewPass(''); setAdmin(false); 
                setMessage({type: 'success-notification', msg: 'User created successfully'})
                setTimeout(()=>setMessage(null), 3000)
            }).catch(err => {
                const error =  err.response.data.error; 
                if (error==='This username is already taken'){
                    setMessage({type: 'error-notification', msg: 'Username already taken, create a new one'})
                    setTimeout(()=>setMessage(null), 3000)
                }
            })
        }
    }

    const changePass = e => {

        if (newPass1!==newPass2){
            setMessage({type: 'error-notification', msg: 'The fields must have the same password'})
            setTimeout(()=>setMessage(null), 3000)
        } else if (newPass1.length < 5) {
            setMessage({type: 'error-notification', msg: 'The password should have 5 characters or more'})
            setTimeout(()=>setMessage(null), 3000)
        } else if (newPass1.indexOf(' ')!==-1){
            setMessage({type: 'error-notification', msg: 'The password should not have empty spaces'})
            setTimeout(()=>setMessage(null), 3000)
        } else {
            currUser.newPass = newPass1; 
            userService.update(currUser).then(resp => {
                setMessage({type: 'success-notification', msg: 'Password changed successfully'})
                setTimeout(()=>setMessage(null), 3000)
                setNewPass1(''); setNewPass2('')
            })
        }
    }

    const createUser = () => {
        return (
            <div className='new-user-box'>
                <p>Create new user</p>
                <div className='new-user'>

                    <div>
                        Username: <br/>
                        Password: <hr className='half-break'/>
                        Admin: 
                    </div>
                    <div>
                        <input value={username} onChange={e=>setUsername(e.target.value)}></input> <br/>
                        <input type='password' value={newPass} onChange={e=>setNewPass(e.target.value)}></input> <hr className='half-break'/>
                        <input className='checkbox' type='checkbox' value={admin} onChange={e=>setAdmin(e.target.checked)}></input> 
                        <button onClick={create}>Create</button>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }

    return (
        <div>
            <Title title='Settings' />
            <div className='config-users-box'>
                {(currUser.admin) ? createUser():null}

                <p>Change your password </p>
                <div className='change-password'>
                    
                    <div>
                        New password: <br/>
                        Confirm:
                    </div>
                    <div>
                    <input type='password' value={newPass1} onChange={e=>setNewPass1(e.target.value)}></input> <br/>
                    <input type='password' value={newPass2} onChange={e=>setNewPass2(e.target.value)}></input> 
                    <button onClick={changePass}>Save</button>
                    </div>
                    
                </div>
                <hr/>
                <Notification message={message}/>

                <div className='change-language'>
                    {/* Put the language toggle helper 
                    */}

                </div>
            </div>
            
        </div>
    )
}


export default Config
