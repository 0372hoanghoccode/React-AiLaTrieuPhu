import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Quiz = ({ data, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  // thêm biến trạng thái mới 
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);

  const [phoneAFriendUsed, setPhoneAFriendUsed] = useState(false);

  const [askExpertUsed, setAskExpertUsed] = useState(false);
  const [expertAnswer, setExpertAnswer] = useState(null);
  
  const [changeQuestionUsed, setChangeQuestionUsed] = useState(false);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");

    delay(1000, () => {
      setClassName(item.correct ? "answer correct" : "answer wrong");
    });

    delay(3000, () => {
      if (item.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };
// xử lý 50/50
  const handleFiftyFifty = () => {
    if (!fiftyFiftyUsed) {
      const wrongAnswers = question.answers.filter(answer => !answer.correct);
      const randomWrongAnswers = wrongAnswers.slice(0, 2);
      const filteredAnswers = question.answers.filter(answer => answer.correct || !randomWrongAnswers.includes(answer));
      setQuestion({ ...question, answers: filteredAnswers });
      
      setFiftyFiftyUsed(true);
    }
  };
// xử lý nghe điện thoại
  const handlePhoneAFriend = () => {
    if (!phoneAFriendUsed) {
      alert("Bạn là Batman!"); 
    
      setPhoneAFriendUsed(true);
    }
  };
// xử lý hỏi chuyên gia
  const handleAskExpert = () => {
    if (!askExpertUsed) {
      const correctAnswerText = question.answers.find(answer => answer.correct).text;
      setExpertAnswer(correctAnswerText);
      
      setAskExpertUsed(true);
    }
  };
// xử lý chuyển câu hỏi
  const handleChangeQuestion = () => {
    if (!changeQuestionUsed) {
      setQuestionNumber((prev) => prev + 1);
      setSelectedAnswer(null);
      setChangeQuestionUsed(true);
    }
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div
            className={selectedAnswer === item ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(item)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="lifelines">
        <button className="spone" onClick={handleFiftyFifty} disabled={fiftyFiftyUsed}>50/50</button>
        <button className="sptwo" onClick={handlePhoneAFriend} disabled={phoneAFriendUsed}>Gọi điện cho người thân</button>
        <button  className="sptwo" onClick={handleAskExpert} disabled={askExpertUsed}>Hỏi chuyên gia</button>
        <button  className="spthree" onClick={handleChangeQuestion} disabled={changeQuestionUsed}>Chuyển câu hỏi</button>
        {askExpertUsed && <div className="expert-answer">Câu hỏi hay nhưng sao lại hỏi tôi , chọn đại : <strong>{expertAnswer}</strong></div>}
      </div>
    </div>
  );
};


export default Quiz;
