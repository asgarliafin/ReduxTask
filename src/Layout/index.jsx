import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../components/AppBar'

function Layout() {
  return (
    <>
        <AppBar></AppBar>
        <Outlet/> 
    </>
  )
}

export default Layout