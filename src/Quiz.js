import React, { useState } from "react";

function Quiz() {
  const questions = [
    {
      questionText: "Какой сегодня день недели?",
      answerOptions: [
        { answerText: "Понедельник", isCorrect: false },
        { answerText: "Среда", isCorrect: true },
        { answerText: "Пятница", isCorrect: false },
      ],
    },
    {
      questionText: "Сколько будет 2 + 2?",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText: "Вы любите программировать?",
      answerOptions: [
        { answerText: "Да", isCorrect: true },
        { answerText: "Нет", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      {showScore ? (
        <div>
          <h2>Вы ответили правильно на {score} из {questions.length} вопросов</h2>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestion].questionText}</h3>
          <div>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
                style={{ margin: "5px", padding: "10px" }}
              >
                {option.answerText}
              </button>
            ))}
          </div>
          <p>Вопрос {currentQuestion + 1} из {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
