import React from 'react'
// import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
// import Middle from './Middle';


function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      {/* <Middle /> */}
      <Footer />
    </>
  )
}

export default Layout;
