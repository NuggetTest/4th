import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const unscrambleWords = [
  { scrambled: 'ruoaiehp', answer: 'euphoria', hint: 'BTS song', length: 8 },
  { scrambled: 'arysoahgnra', answer: 'saranghaeyo', hint: 'I love you', length: 11 },
  { scrambled: 'jhjbiu', answer: 'bhujji', hint: 'The doggo you named in minecraft', length: 6 },
  { scrambled: 'htoadmbueb', answer: 'hotdumbabe', hint: 'Your name in minecraft', length: 10 },
];

function UnscrambleGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  const currentWord = unscrambleWords[currentIndex];

  const handleSubmit = () => {
    if (input.toLowerCase() === currentWord.answer) {
      setMessage('Correct! Moving to the next word.');
      setScore(score + 1);
      if (currentIndex < unscrambleWords.length - 1) { 
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setInput('');
          setMessage('');
          setShowHint(false);
        }, 1000);
      } else {
        setMessage(`Congratulations, you have completed all the questions!`);
      }
    } else {
      setMessage('Incorrect, try again!');
    }
  }; 

  const handleSkip = () => {
    if (currentIndex < unscrambleWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setInput('');
      setMessage('');
    }
  };

  const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/'); 
    };

  return (
    <div className='unscramble-container'>
      <h1 className='title2'>Unscramble the words</h1>
      <button className='button2' onClick={handleButtonClick}>Home</button>
      <p className='scrambled'>{currentWord.scrambled}</p>
      {showHint && <p style={{fontSize: '20px'}}>Hint: {currentWord.hint}</p>}
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type your answer here" 
        className='input'
      />
      <p style={{backgroundColor: 'black'}}>{input.length} / {unscrambleWords[currentIndex].length}</p>
      <div className='button-container2'>
        <button className='button3' onClick={handleSubmit}>Submit</button>
        <button className='button3' onClick={() => setShowHint(true)}>Show Hint</button>
        <button className='button3' onClick={handleSkip} disabled={currentIndex === unscrambleWords.length - 1}>Skip Question</button>
      </div>
      <p style={{fontSize: '20px'}}>{message}</p>
    </div>
  );
}

export default UnscrambleGame;
