import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const quizData = [
    {
      question: "Your favorite show which we have watched together?",
      options: [
        { type: "text", content: "You" },
        { type: "text", content: "Atypical" },
        { type: "text", content: "The boys" },
        { type: "text", content: "The office" },
        { type: "text", content: "Naked attraction ._." }
      ],
      correctAnswer: "Atypical"
    },
    {
      question: "Favorite activity/game that we have done together",
      options: [
        { type: "text", content: "Valorant" },
        { type: "text", content: "Bowling" },
        { type: "text", content: "Word making game" },
        { type: "text", content: "Scribble" },
        { type: "text", content: "Ludo" }
      ],
      correctAnswer: "Scribble"
    },
    {
      question: "Which date did you like the most out of these?",
      options: [
        { type: "image", content: "./src/images/car.jpg" },
        { type: "image", content: "./src/images/humayun.jpg" },
        { type: "image", content: "src/images/pizza.jpg" },
        { type: "image", content: "src/images/shoes.jpg" }, 
        { type: "image", content: "src/images/ramen.jpg" } 
      ],
      correctAnswer: "src/images/humayun.jpg"
    },
    {
        question: "Which house would you choose?",
        options: [
          { type: "image", content: "src/images/Screenshot_20240819_211804_Instagram.jpg" },
          { type: "image", content: "src/images/Screenshot_20240819_211808_Instagram.jpg" },
          { type: "image", content: "src/images/Screenshot_20240819_211814_Instagram.jpg" },
          { type: "image", content: "src/images/Screenshot_20240819_211823_Instagram.jpg" }
        ],
        correctAnswer: "src/images/Screenshot_20240819_211814_Instagram.jpg"
      }
  ];
  
  const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/'); 
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option.content);
      const isCorrect = option.content === quizData[currentQuestionIndex].correctAnswer;
      
      setPopupMessage(isCorrect ? "Matched! Wuhuuu" : `Didn't Match! I chose ${quizData[currentQuestionIndex].correctAnswer}`);
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
      setShowPopup(true);
    };
  
    const handleNextQuestion = () => {
      setShowPopup(false);
      setSelectedOption('');
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert(`Quiz completed! Your score: ${score}/${quizData.length}`);
      }
    };
  
    return (
      <div className="quiz-container">
        <img src="/flower.png" alt="flower" style={{position: 'absolute', top: '-70px', left: '-100px', scale: '0.7'}}/>
        <h1 className='title'>Match my freak</h1>
        <h2>Answer each question and we'll match if we answered the same</h2>
        <div className="question-container">
          <p>{quizData[currentQuestionIndex].question}</p>
        </div>
        <div className="options-container">
          {quizData[currentQuestionIndex].options.map((option, index) => (
              <button
              key={index}
              className={`option-button ${selectedOption === option.content ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
              disabled={!!selectedOption}
              >
              {option.type === "text" ? (
                  option.content
              ) : (
                  <div className='image-container'>
                    <img className='image' src={option.content} alt={`Option ${index + 1}`} />
                  </div>
              )}
              </button>
          ))}
        </div>
        
        {showPopup && (
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        )}

        {currentQuestionIndex === quizData.length - 1 && (
            <button className='button2 quiz-home' onClick={handleButtonClick}>
                Home
            </button>
        )} 
      </div>
    );
  };
  
  export default Quiz;
