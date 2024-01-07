import React, { useState } from 'react';

function HeartIcon() {
  const [isFilled, setIsFilled] = useState(false);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <i className={`fa fa-heart${isFilled ? ' text-secondary' : ''}`} onClick={toggleHeart}></i>
  );
}

export default HeartIcon;
