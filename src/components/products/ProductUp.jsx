import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: 'orange',
  border: 'none',
  borderRadius: '8px',
  padding: '15px 30px',
  textDecoration: 'none',
  color: 'white',
  fontSize: '1.5em',
  transition: 'background-color 0.3s ease', // 배경색 전환 트랜지션
};

const hoverStyle = {
  backgroundColor: 'lightgray', // 호버시 배경색 변경
};

function Home() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div>
      <Link
        to="/product-registration"
        style={{ ...buttonStyle, ...(isHovered && hoverStyle) }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        상품 등록
      </Link>
    </div>
  );
}

export default Home;
