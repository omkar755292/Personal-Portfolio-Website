import React from 'react'

const Register = () => {
    return (
        <div className='auth-form'>
            <form>
                <div >
                    {/* <label >Enter Your Name</label> */}
                    <input type="text" placeholder='Name'/>
                </div>
                <div >
                    {/* <label >Email address</label> */}
                    <input type="email" placeholder='Email' />
                </div>
                <div >
                    {/* <label >Password</label> */}
                    <input placeholder='Password'/>
                </div>
                <div >
                    {/* <label >Confirm Password</label> */}
                    <input placeholder='Confirm Password' />
                </div>
                <div>
                <a href="" className='button'>Submit</a>&nbsp;<a  href="/authentication/login">Login</a>
                </div>
            </form>
        </div>
    )
}

export default Register