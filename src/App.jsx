import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Blob from './Blob';
import House from './House';
import Unscramble from './components/Unscramble.jsx';
import Crossword from './components/Crossword.jsx';
import Quiz from './components/Quiz.jsx';
import './index.css';

function App() {
  const navigate = useNavigate();

  const handleHouseTouch = (destination) => {
    navigate(destination);
  };

  const houses = [
    { position: { x: 12, y: 12 }, onTouch: () => handleHouseTouch('/house1') },
    { position: { x: 88, y: 12 }, onTouch: () => handleHouseTouch('/house2') },
    { position: { x: 48, y: 85 }, onTouch: () => handleHouseTouch('/house3') },
  ];

  return (
    <>
    <div className='home-page'>
      <Routes>
        <Route path="/" element={<><div><Blob houses={houses} />{houses.map((house, index) => (<House key={index} position={house.position} onTouch={house.onTouch} />))}</div><div style={{position: 'absolute', top: '120px', left: '50%', transform: 'translateX(-50%)', color: 'lightgreen', textShadow: '0 5px 5px #000', fontSize: '30px'}}>
            Move simbu with arrow keys to help him play
        </div></>} />
        <Route path="/house1" element={<Crossword />} />
        <Route path="/house2" element={<Quiz />} />
        <Route path="/house3" element={<Unscramble />} />
      </Routes>
    </div>
    
    </>
  );
}

export default App;
