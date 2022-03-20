import React, {useState} from 'react'
import '../sass/Login.scss'
import loginService from '../services/login'
import Notification from './helperComponents/Notification'

function Login({setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const user = await loginService.login({
                username, password
            })
            setUser(user)
            window.localStorage.setItem(
                'loggedUserP1', JSON.stringify(user)
            )
            //console.log('user logged in: ', user, 'token: ', user.token)

        } catch (err) {
            //console.log('error logging in: ', err); 
            setMessage({type: 'error-notification', msg: 'User or password incorrect, please try again or contact the administrator'})
            setTimeout(()=>setMessage(null), 3000)
        }
    }

    const clearLogin = (e) =>{
        e.preventDefault(); 
        setUsername('')
        setPassword('')

    }

    return (
        <div className='login-page'>
            <div className='login-header'>
                <h2 className='titles'>Login</h2>
            </div>

            

            <div className='login-card'>

                <form onSubmit={handleLogin} className='login-form'>

                    <div className='login-fields'>

                        <div className='field'>
                            <input className='login-input' placeholder='user' value={username} onChange={({target})=>setUsername
                        (target.value)}/>
                        </div>

                        <div className='field'>
                            <input className='login-input' placeholder='password' type='password' value={password} onChange={({target})=>setPassword
                        (target.value)}/>
                        </div>

                    </div>
                    <button type='submit' style={{display:'none'}}>submit</button>

                </form>

                <div className='login-buttons'>

                        <div type='submit' role='button' className='login-button' onClick={handleLogin}>login</div>

                        <div role='button' className='login-clear' onClick={clearLogin}>clear</div>

                </div>

            </div>
            <Notification message={message}/>
        </div>
    )
}

export default Login
