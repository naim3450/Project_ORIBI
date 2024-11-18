import React from 'react'
import Navber from '../Navber'
import SubHeadder from './SubHeadder'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const RoutLayout = () => {
  return (
    <div>
      <Navber />
      <SubHeadder />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RoutLayout