import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../recoils/login';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const loginUser = useRecoilValue(loginState);
  const setLoginUser = useSetRecoilState(loginState);

  const handleLogout = () => {
    setLoginUser(null);
    setIsLoggedIn(false);
    navigate('/login');
  };

  if (loginUser && !isLoggedIn) {
    setIsLoggedIn(true);
  }

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
