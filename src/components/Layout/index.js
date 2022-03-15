import React from 'react'
import Footer from '../Footer'
import Header from '../MainHeader'

const Layout = (props) => {
  return (
    <>
        <Header />
        {props.children}
        <Footer />
    </>
  )
}

export default Layout