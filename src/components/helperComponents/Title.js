import React from 'react'
import '../../sass/HelperComponents.scss'

function Title({title}) {
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <hr  className='divider'/>
        </div>
    )
}

export default Title
