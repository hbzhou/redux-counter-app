import './index.css'
import React from 'react';

const User = (user) => {
    const {login, avatar_url, html_url} = user;
    return (
        <div className="card">
            <a href={html_url} target='_parent'>
                <img src={avatar_url} style={{width: '100px'}} alt='unknown'/>
            </a>
            <p className="card-text">{login}</p>
        </div>
    )
};

export default User;