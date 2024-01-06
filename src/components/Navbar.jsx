import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   // 로그인 처리
  //   setIsLoggedIn(true);
  // };

  const handleLogout = () => {
    // 로그아웃 처리
    setIsLoggedIn(false);
  };

  return (
    <div className="d-flex m-2 me-0">
      {isLoggedIn ? (
        <Link to="/" className="nav-item nav-link" onClick={handleLogout}>
          <sup>Logout</sup>
        </Link>
      ) : (
        <Link to="/login" className="nav-item nav-link">
          <sup>Login</sup>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
