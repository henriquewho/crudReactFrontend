import React, {useState, useEffect} from 'react'

import Login from './components/Login'
import Main from './components/Main';

const App = () => {
    const [user, setUser] = useState(null)
	console.log('app loaded'); 

    useEffect(()=>{
        const loggedUserJSON = window.localStorage.getItem('loggedUserP1')
		console.log('loggedUserJSON: ', loggedUserJSON); 
        if (loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            // noteService.setToken(user.token)
        }
    }, [])

    return (
        <div>
            {
                (user===null) ? <Login setUser={setUser}/> 
                : <Main user={user}/>
            }
        </div>
    )
}

export default App