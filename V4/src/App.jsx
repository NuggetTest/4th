import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Blob from './Blob';
import House from './House';
import House1 from './House1';
import House2 from './House2';
import House3 from './House3';
import House4 from './House4';
import './index.css';

function App() {
  const navigate = useNavigate();

  const handleHouseTouch = (destination) => {
    navigate(destination);
  };

  const houses = [
    { position: { x: 10, y: 10 }, onTouch: () => handleHouseTouch('/house1') },
    { position: { x: 90, y: 10 }, onTouch: () => handleHouseTouch('/house2') },
    { position: { x: 10, y: 90 }, onTouch: () => handleHouseTouch('/house3') },
    { position: { x: 90, y: 90 }, onTouch: () => handleHouseTouch('/house4') },
  ];

  return (
    <div className='home-page'>
      <Routes>
        <Route path="/" element={<div><Blob houses={houses} />{houses.map((house, index) => (<House key={index} position={house.position} onTouch={house.onTouch} />))}</div>} />
        <Route path="/house1" element={<House1 />} />
        <Route path="/house2" element={<House2 />} />
        <Route path="/house3" element={<House3 />} />
        <Route path="/house4" element={<House4 />} />
      </Routes>
    </div>
  );
}

export default App;
