import React, { useEffect } from 'react';
import './../fruitables-1.0.0/css/style.css'; 


function Navbar2() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* 네비게이션 내용 */}
    </nav>
  );
}

export default Navbar2;
