import React from 'react'
import Avatar from '../component/Avatar'
import Login from './Login'
import Register from './Register'
import { Route, Routes } from 'react-router-dom'
import cancelIcon from '../asset/icons/xmark-solid (1).svg'
import '../asset/css/signin.css'
import ProjectQuery from './ProjectQuery'


const SignIn = () => {

    return (
        <div className='authentication'>
            <a href="/"><img src={cancelIcon} alt= 'back' className='cancel-icon'/></a>
            <Avatar />
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/startproject' element={<ProjectQuery />} />
            </Routes>
        </div>
    )
}

export default SignIn