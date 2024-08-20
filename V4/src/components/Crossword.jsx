import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { CrosswordProvider,
         CrosswordGrid,
         DirectionClues,
         ThemeProvider } from '@jaredreisinger/react-crossword';

const data = {
    across: {
        1: {
        clue: 'Where was our first date out',
        answer: 'CRAVINGGRAVE',
        row: 6,
        col: 0,
        },
        2: {
            clue: 'First nickname I gave you (Which you hated)',
            answer: 'BOKI',
            row: 0,
            col: 6,
        },
        3: {
            clue: 'What did we eat on our first anniversary in the car',
            answer: 'MOMO',
            row: 1,
            col: 3,
        },
    },
    down: {
        1: {
        clue: 'The activity on the first date',
        answer: 'BOWLING',
        row: 0,
        col: 6,
        },
        2: {
            clue: 'What was my colour in among us (Yours was black)',
            answer: 'CYAN',
            row: 6,
            col: 0,
        },
        3: {
          clue: 'First show we watched together',
          answer: 'OFFICE',
          row: 0,
          col: 7,
      },
      4: {
        clue: 'Our combined nickname we made',
        answer: 'VAYU',
        row: 6,
        col: 3,
      }  
    },
};

const Crosswordfn = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); 
  };

  const crosswordRef = useRef(null);

  const handleReset = () => {
    if (crosswordRef.current) {
      crosswordRef.current.reset();
    }
  };

  const handleFillAllAnswers = () => {
    if (crosswordRef.current) {
      crosswordRef.current.fillAllAnswers();
    }
  };

  const handleComplete = () => {
    if (crosswordRef.current) {
      if (crosswordRef.current.isCrosswordCorrect() === true) {
        alert('Yass! All correct'); 
      } else {
        alert('Incorrect!');
      }
    }
  };

  return (
    <div className="crossword-container">
      <h2 className='title2'>Our Crossword</h2>
      <div className='crossword-item'>
        <ThemeProvider
            theme={{
            allowNonSquare: true,
            columnBreakpoint: '9999px',
            gridBackground: '#acf',
            cellBackground: '#ffe',
            cellBorder: '#fca',
            textColor: '#000',
            numberColor: '#000',
            focusBackground: '#f00',
            highlightBackground: '#f99',
            }}
        >
            <CrosswordProvider ref={crosswordRef} data={data}>
              <div style={{ display: 'flex', gap: '2em', justifyContent: 'center' }}>
                <div style={{ width: '40%' }}>
                  <CrosswordGrid />
                </div>
                <div style={{ display: 'flex',flexDirection: 'column' ,gap: '5em', justifyContent: 'center' }}>
                 <DirectionClues direction="across"/>
                 <DirectionClues direction="down" />
                </div>
              </div>
            </CrosswordProvider>
        </ThemeProvider>
      </div>
      <div className='button-container'>
        <button className='button3' onClick={handleReset}>Reset Crossword</button>
        <button className='button3' onClick={handleFillAllAnswers}>Fill All Answers</button>
        <button className='button3' onClick={handleComplete}>Check</button>
      </div>
      <button className='button2' onClick={handleButtonClick}>
        Home
      </button>
    </div>
  );
};

export default Crosswordfn;
