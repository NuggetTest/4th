import React, { useState, useEffect } from 'react';

const Blob = ({ houses }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });  //Blob starts in the middle

  const moveBlob = (dx, dy) => {
    setPosition((prevPosition) => {
      const newPosition = {
        x: Math.max(0, Math.min(100, prevPosition.x + dx)),
        y: Math.max(0, Math.min(100, prevPosition.y + dy)),
      };

      // Check for collision with any house
      houses.forEach((house) => {
        if (
          Math.abs(newPosition.x - house.position.x) < 10 &&
          Math.abs(newPosition.y - house.position.y) < 10
        ) {
          house.onTouch(); // Navigate to another page
        }
      });

      return newPosition;
    });
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        moveBlob(0, -2.5);
        break;
      case 'ArrowDown':
        moveBlob(0, 2.5);
        break;
      case 'ArrowLeft':
        moveBlob(-2.5, 0);
        break;
      case 'ArrowRight':
        moveBlob(2.5, 0);
        break;
      default:
        break;
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const { clientX, clientY } = touch;

    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;

    setPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='blob'
      onTouchMove={handleTouchMove}
      style={{
        position: 'absolute',
        top: `${position.y}%`,
        left: `${position.x}%`,
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        zIndex: 2,
      }}>
       <img className='blobphoto' src="/simbu.jpg" alt="simbu" />
    </div>
  );
};

export default Blob;
