import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="app">
      Trivia!
      <Question
        text={data[questionNum].question.text}
        comp={<Answer answer={data[questionNum].question.choices} />}
      />
      <NextQuestion />
      <Answer answer={data[questionNum].question.choices} />
    </div>
  );
}
function Question({ text }) {
  return <div>{text}</div>;
}
function NextQuestion() {
  return (
    <div>
      <button>next question</button>
    </div>
  );
}
function Answer({ answer }) {
  return (
    <div className="choices">
      {answer.map((k) => (
        <div>{k}</div>
      ))}
    </div>
  );
}

export default App;
// Goal 1: Render the answer choices from sample_data.json on the screen.

// - [ ] In App.jsx, create an Answer component.
// - [ ] Render an instance of `<Answer />` inside of `<Question />`.
// - [ ] Add props to `<Answer />` with the text "Answer goes here".
//   - [ ] Pass props for the answer choices into `<Question />`.
//   - [ ] Use those props to render the Answer components inside `<Question />` to display the answer choices.
// - [ ] Refactor to use map to map over all answer choices.
