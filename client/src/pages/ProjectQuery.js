import React from 'react'
import { Link } from 'react-router-dom'

const ProjectQuery = () => {
    return (
        <div className='auth-form'>
            <form>
                <div >
                    {/* <label >Enter Your Name</label> */}
                    <input type="text" placeholder='Project Name' />
                </div>
                <div >
                    {/* <label >Enter Your Name</label> */}
                    <textarea type="text" placeholder='Project Short Description' />
                </div>
                <div>
                    <Link to="/" className='button'>Submit</Link>
                </div>
            </form>
        </div>
    )
}

export default ProjectQuery