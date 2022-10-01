import React from 'react';
import "./loginBox.css"
function LoginBox() {
    return (
        <div className='loginContainer'>
            <h1>Login</h1>
            <form action="" method="" id='form'>
                <input type="email" className='inp' placeholder='Email' /><br />
                <input type="password" className='inp' placeholder='password' /><br />
                <button type='submit' id='btn'>Login</button>
            </form>
        </div>
    );
}

export default LoginBox;