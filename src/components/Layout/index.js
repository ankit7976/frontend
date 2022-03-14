import React from 'react'
import Header from '../MainHeader'

const Layout = (props) => {
  return (
    <>
        <Header />
        {props.children}
        
    </>
  )
}

export default Layout