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
        borderRadius: '50px',
        overflow: 'hidden',

      }}
      onTouchStart={onTouch}
    >
        <img className='blobphoto' src="/ball.png" alt="ball"/>
    </div>
  );
};

export default House;
