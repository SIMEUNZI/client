import React from 'react';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: 'orange',
  border: 'none',
  borderRadius: '8px',
  padding: '15px 30px',
  textDecoration: 'none',
  color: 'white',
  fontSize: '1.5em',
  transition: 'background-color 0.3s ease',
};

const hoverStyle = {
  backgroundColor: 'lightgray',
};

function PRbutton() {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false); // 로그인 상태 상태값

  // 로그인 여부 확인
  React.useEffect(() => {
    // 로그인 여부를 확인하는 로직을 구현해야 함.

    setIsUserLoggedIn(true); // true = 로그인 상태
    // setIsUserLoggedIn(false);   // false = 로그아웃 상태
  }, []);

  // 상품 등록 버튼 클릭 핸들러
  const handleClick = () => {
    // 로그인되어 있지 않은 경우 알림창을 띄우고 확인을 누르면 로그인 페이지로 이동
    if (!isUserLoggedIn) {
      const confirmed = window.confirm('로그인이 필요합니다. 로그인 하시겠습니까?');
      if (confirmed) {
        navigate('/login'); // 로그인 페이지 경로로 리다이렉트
      }
    } else {
      navigate('/product-register'); // 로그인된 경우 상품 등록 페이지로 이동
    }
  };

  return (
    <div>
      <button
        style={{ ...buttonStyle, ...(isHovered && hoverStyle) }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        상품 등록
      </button>
    </div>
  );
}

export default PRbutton;
