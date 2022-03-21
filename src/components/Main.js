import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Config from './Config'
import Items from './Items'
import Item from './Item'
import {FaUsersCog, FaHome} from 'react-icons/fa'

import '../sass/Main.scss'
import NewItem from './NewItem'

function Main({user}) {

    const logout = () =>{
        window.localStorage.clear();
		window.location.href='/crudReactFrontend';
        window.location.reload();
    }

    return (
        <div className='main-page'>
            <Router>
                <div className='main-navbar'>
                    <div className='main-menu'>
                            <Link to={'/crudReactFrontend'} style={{textDecoration:'none', color: 'black'}} className='main-menu-home'>
                                <FaHome size={50} className='menu-home'/>
                            </Link>

                            <span style={{fontSize:'42px'}}>|</span>

                            <div className='main-menu-test'>
                                <Link to={'/crudReactFrontend/new'} style={{ textDecoration: 'none'}}>
                                    New item
                                </Link>
                            </div>
                        
                    </div>

                    <div className='main-menu-logout'>
                        <Link className='main-menu-cog' to={'/crudReactFrontend/config'} style={{textDecoration:'none', textDecorationColor:'none'}}> <FaUsersCog size={42}/> </Link>
                        <div onClick={logout} className='main-menu-card logout'>
                            Logout
                        </div>
                    </div>

                </div>

                <Switch>
                    <Route path={'/crudReactFrontend/item/:id'}><Item user={user}/></Route>
                    <Route path={'/crudReactFrontend/config'}><Config user={user}/></Route>
                    <Route path={'/crudReactFrontend/new'}><NewItem user={user}/></Route>
                    <Route path={'/crudReactFrontend'}><Items user={user}/></Route>
                </Switch>
            </Router>

            <footer> <p>User: {user.name}</p></footer>
        </div>
    )
}

export default Main
