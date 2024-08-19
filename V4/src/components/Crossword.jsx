import React from 'react';
import { useNavigate } from 'react-router-dom'
import Crossword, { ThemeProvider} from '@jaredreisinger/react-crossword';

const data = {
    across: {
        1: {
        clue: 'Where was our first date out',
        answer: 'CravingGrave',
        row: 6,
        col: 0,
        },
        2: {
            clue: 'First nickname I gave you (Which you hated)',
            answer: 'Boki',
            row: 0,
            col: 6,
        },
        3: {
            clue: 'What did we eat on our first anniversary in the car',
            answer: 'Momo',
            row: 1,
            col: 5,
        },
    },
    down: {
        1: {
        clue: 'The activity on the first date',
        answer: 'Bowling',
        row: 0,
        col: 6,
        },
        2: {
            clue: 'What was my colour in among us (Yours was black)',
            answer: 'Cyan',
            row: 6,
            col: 0,
        },
        
    },
};

const Crosswordfn = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); 
  };

  return (
    <div className="crossword-container">
      <h2>Our Crossword</h2>
      <div className='crossword-item'>
        <ThemeProvider
            theme={{
            allowNonSquare: true,
            columnBreakpoint: '9999px',
            gridBackground: '#acf',
            cellBackground: '#ffe',
            cellBorder: '#fca',
            textColor: '#fff',
            numberColor: '#000',
            focusBackground: '#f00',
            highlightBackground: '#f99',
            }}
        >
            <Crossword data={data} />
        </ThemeProvider>
      </div>
      <button className='button2' onClick={handleButtonClick}>
        Home
      </button>
    </div>
  );
};

export default Crosswordfn;
