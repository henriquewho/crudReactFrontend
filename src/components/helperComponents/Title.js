import React from 'react'
import '../../sass/HelperComponents.scss'

function Title({title, logout}) {
	if (title === 'All Items'){
		return (
			<div>
				<h2 className='title'>{title} <button onClick={logout}>Logout</button> </h2>
				<hr  className='divider'/>
			</div>
		)
	}
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <hr  className='divider'/>
        </div>
    )
}

export default Title
