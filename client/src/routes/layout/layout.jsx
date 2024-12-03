import React, {useContext} from 'react'
import './layout.scss'
import Navbar from '../../components/navbar/Navbar'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
  return (
    <div className="layout">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

const RequiredAuth = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    !currentUser ? (<Navigate to ="/login" />)
    : (
    <div className="layout">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
    )
  )
}

export {Layout, RequiredAuth}