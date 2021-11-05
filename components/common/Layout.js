import React from 'react'
import AppBar from '../AppBar'

const Layout = ({ children }) => (
  <>
    <AppBar />
    {children}
  </>
)

export default Layout
