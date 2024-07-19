import React from 'react';

import '../styles/header.css';

export default function Header() {
    return (
        <header className='header'>
            <div className='headerLogo'>
                <span className='header-logo-text'>education project</span>
            </div>
            <div className='header-search'>
                
            </div>
            <div className='user'>
                <p className='user-name'></p>
            </div>
        </header>
    );
};