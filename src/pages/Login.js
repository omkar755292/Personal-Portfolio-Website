import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const verify = (e) => {
        e.preventDefault();
        const verifyUser = {email, password};
        console.log(verifyUser);
        setEmail('');
        setPassword('');
    }
    return (
        <div className='auth-form'>
            <form onSubmit={verify}>
                <div>
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder='Enter your Name' />
                </div>
                <div >
                    <input
                        type='password'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder='Enter Your password' />
                </div>
                <div>
                    <button className='button'>Submit</button>&nbsp;<Link to="/authentication/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login