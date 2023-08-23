import React from 'react'

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
                    <a href="" className='button'>Submit</a>
                </div>
            </form>
        </div>
    )
}

export default ProjectQuery