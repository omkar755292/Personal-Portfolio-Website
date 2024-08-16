import React from 'react'
import { Link } from 'react-router-dom';

const StartProject = () => {
    return (
        <div className='startproject'>
            <div><h2>Start a Project</h2></div>
            <div><p>Interested in creating beautifull Website
                I’m always open to discussing product design work , Just share your Idea with
                me.</p></div>
            <div><Link to="/authentication/startproject"><button>Let's do it</button></Link></div>
        </div>
    )
}

export default StartProject