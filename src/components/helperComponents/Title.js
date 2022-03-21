import React from 'react'
import '../../sass/HelperComponents.scss'

function Title({title, logout}) {
	if (title === 'All Items'){
		return (
			<div>
				<div className='all-items-title'>
					<h2>{title}</h2>
					<button className='logout-button' onClick={logout}>Logout</button> 
				</div>
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
