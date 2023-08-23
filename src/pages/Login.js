import React from 'react'

const Login = () => {
    return (
        <div className='auth-form'>
            <form>
                <div>
                    {/* <label >Email address</label> */}
                    <input type="email" placeholder='Enter your Name'/>
                </div>
                <div >
                    {/* <label >Password</label> */}
                    <input type='password' placeholder='Enter Your password'/>
                </div>
                <div>
                    <a href="" className='button'>Submit</a>&nbsp;<a  href="/authentication/register">Register</a>
                </div>
            </form>
        </div>
    )
}

export default Login