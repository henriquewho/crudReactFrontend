import React from 'react'

const Notification = ({message}) => {
    if (!message) return null;

    const type = message ? message.type : ''; 
    const notifClass = `notification ${type}`

    return (
        <div className={notifClass}>
            {message.msg}
        </div>
    )
}

export default Notification