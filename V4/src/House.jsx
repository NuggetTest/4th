import React from 'react';

const House = ({ position, onTouch }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y}%`,
        left: `${position.x}%`,
        width: '80px',
        height: '80px',
        backgroundColor: 'lightcoral',
        borderRadius: '10px',
      }}
      onTouchStart={onTouch}
    />
  );
};

export default House;
