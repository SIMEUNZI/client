import React from 'react'
// import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Middle from './Middle';
// import FooterBottom from './FooterBottom';

function Layout() {
  return (
    <>
      <Header />
      <Middle />
      <Footer />
    </>
  )
}

export default Layout;
