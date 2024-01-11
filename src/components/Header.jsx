import React from 'react';
import Navbar from './Navbar';

import './../fruitables-1.0.0/css/bootstrap.min.css'
import './../fruitables-1.0.0/css/style.css'

import { Link } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function Header() {
  const topLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '2px', 
    top: '0',
    right: '25%'
  };

  return (
  <div>
    <head>
        <meta charset="utf-8" />
        <title>3조 Project</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />

        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap" rel="stylesheet" /> 

        {/* <!-- Icon Font Stylesheet --> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* <!-- Libraries Stylesheet --> */}
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />


        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Template Stylesheet --> */}
        <link href="css/style.css" rel="stylesheet" />
    </head>

    <div className='navbar2'> 
      <div className="container-fluid">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="https://www.multicampus.com/cs/map/mapMain?p_menu=MTA1I01BSU4=&p_gubun=Qw==&req=0" className="text-white">Multi-Campus</a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="https://github.com/gigamackijo-project/CarrotCon.git" className="text-white">gigamackijo.git</a>
              </small>
            </div>
            <div className="top-link pe-2" style={topLinkStyle}>
              <Link href="#" className="text-white">
                <small className="text-white mx-2">Park</small>/
              </Link>
              <Link href="#" className="text-white">
                <small className="text-white mx-2">Sim</small>/
              </Link>
              <Link href="#" className="text-white">
                <small className="text-white ms-2">Lee</small>
              </Link>
            </div>
          </div>
        </div>
         </div>
           <div class="container px-0">
                <nav class="navbar navbar-light bg-white navbar-expand-xl">
                    <Link href="index.html" class="navbar-brand"><h1 class="text-primary display-6">CarrotCon</h1></Link>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">
                            <Link to="/" class="nav-item nav-link active">Home</Link>
                            <Link to="shop" className="nav-item nav-link">Shop</Link>
                            <Link to="shop-detail.html" class="nav-item nav-link">Community</Link>
                            <div class="nav-item dropdown">
                                <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">My pages</Link>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <Link to="sell" class="dropdown-item">Sell or Buy</Link>
                                    <Link to="chackout.html" class="dropdown-item">Wishlist</Link>
                                    <Link to="testimonial.html" class="dropdown-item">Profile</Link>
                                    <Link to="404.html" class="dropdown-item">404 Page</Link>
                                </div>
                            </div>


                        </div>
                        <div class="d-flex m-3 me-0">
                          <>
                          <RecoilRoot>  
                            <Navbar />
                          </RecoilRoot>
                          </>
                            <Link to="signup" class="nav-item nav-link"><sub>Signup</sub></Link>
                            <Link href="#" class="position-relative me-4 my-auto">
                                <i class="fa fa-shopping-bag fa-2x"></i>
                                <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style= {{top: '-5px', left: '15px', height: '20px', minWidth: '20px'}}>3</span>
                            </Link>
                            <Link href="#" class="my-auto">
                                <i class="fas fa-user fa-2x"></i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}
        {/* <!-- Back to Top --> */}
        <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>   

    </div>    
  );
}

export default Header;