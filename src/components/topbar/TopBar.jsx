import React from 'react';
import "./topbar.css"
function TopBar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>LMS</span>
            </div>
            <div className='topbarCenter'>
                <input type="text" placeholder='Search...' id="search" />
            </div>
            <div className='topbarRight'>
                <button id='loginBtn'>Login</button>
            </div>
        </div>
    );
}

export default TopBar;