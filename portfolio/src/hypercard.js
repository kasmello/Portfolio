import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './hypercard.css';

const RoundedCard = ({ imageSrc, label, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className="rounded-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{width: isMobile ? '43vw': '400px'}}
    >
      <img src={imageSrc} alt={label} />
      <div className="content">
        <h3>{isHovered ? description : label}</h3>
      </div>
    </div>
  );
};

export default RoundedCard;
