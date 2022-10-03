import React from 'react';
import "./signupbox.css"
function SignupBox() {
    return (
        <div className='signupContainer'>
            <h1>SignUp</h1>
            <form action="" method="" id='form'>
                <input type="text" className='inp' placeholder='Username' required /><br />
                <input type="email" className='inp' placeholder='Email' required /><br />
                <input type="password" className='inp' placeholder='password' required /><br />
                <button type='submit' id='btn'>Login</button>
            </form>
        </div>
    );
}

export default SignupBox;