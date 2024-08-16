import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const register = (e) => {
        e.preventDefault();
        const newUser = { name, email, password, confirmpassword }
        console.log(newUser);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    }
    return (
        <div className='auth-form'>
            <form onSubmit={register}>
                <div >
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder='Name' />
                </div>
                <div >
                    <input type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Email' />
                </div>
                <div >
                    <input
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder='Password' />
                </div>
                <div >
                    <input
                        value={confirmpassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        placeholder='Confirm Password' />
                </div>
                <div>
                    <button type='submit' className='button'>Submit</button>&nbsp;<Link to="/authentication/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register