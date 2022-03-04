import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  const [questionNum, setQuestionNum] = useState(0);
  const [answerDisplayed, setAnswerDisplayed] = useState("");
  function setToTrue(string) {
    if (string) {
      console.log(string);
      setAnswerDisplayed("correct");
      console.log(answerDisplayed);
    } else {
      setAnswerDisplayed("try again");
    }
  }
  return (
    <div className="app">
      Trivia!
      <Question
        text={data[questionNum].question.text}
        answerChoices={data[questionNum].question.choices}
        correctAnswer={
          data[questionNum].question.choices[
            data[questionNum].question.correct_choice_index
          ]
        }
        func={setToTrue}
      />
      {answerDisplayed}
      <NextQuestion />
    </div>
  );
}
function Question({ text, answerChoices, correctAnswer, func }) {
  return (
    <div>
      {text}
      <Answer
        answerChoices={answerChoices}
        correctAnswer={correctAnswer}
        func={func}
      />
    </div>
  );
}
function NextQuestion() {
  return (
    <div>
      <button>next question</button>
    </div>
  );
}
function Answer({ answerChoices, correctAnswer, func }) {
  return (
    <div className="choices">
      {answerChoices.map((k) => (
        <div>
          <Button answer={k} correctAnswer={correctAnswer} func={func} />
        </div>
      ))}
    </div>
  );
}
function Button({ answer, correctAnswer, func }) {
  function checkAnswer() {
    if (answer === correctAnswer) {
      console.log("123");
      func(true);
      console.log(func);
    } else {
      func(false);
    }
  }
  return (
    <div>
      <button onClick={checkAnswer}>{answer}</button>
    </div>
  );
}

export default App;
// # Goal 2: Render a button on the screen that reveals the correct answer when clicked.

// - [ ] Using `useState` in `<App />`, create a boolean state variable called `answerDisplayed` to keep track of whether the correct answer is shown.
// - [ ] Add a button to the App component that will update the state to display the correct answer when it is clicked.
// - [ ] Create an onClick function that sets the state to display the correct answer choice when your button is clicked.
//   - [ ] HINT: Access the correct answer choice using `sample_data.json`.
