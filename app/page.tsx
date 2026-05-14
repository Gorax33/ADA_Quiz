"use client";

import { useState } from "react";


export default function Home() {

  const [playerAnswer, setPlayerAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      text: "Quelle est la capitale de la France ?",
      answer: "Paris",
      points: 1,
      category: "Géographie"
    },
    {
      text: "Quel est le résultat de 2 + 2 ?",
      answer: "4",
      points: 1,
      category: "Mathématiques"
    },
    {
      text: "Qui a écrit 'Les Misérables' ?",
      answer: "Victor Hugo",
      points: 1,
      category: "Littérature"
    },
    {
      text: "Quelle est la formule chimique de l'eau ?",
      answer: "H2O",
      points: 1,
      category: "Sciences"
    }
  ];

  function handleSubmit() {
  console.log(playerAnswer);
  setQuestionIndex(questionIndex + 1);
}

  return (
    <main>
      <header>
        <h1>ADA Quiz</h1>
      </header>
      
      <h3>{questionIndex + 1}/{questions.length}</h3>

      <h2>{questions[questionIndex].text}</h2>

      <input type="text" value={playerAnswer} onChange={(event) => setPlayerAnswer(event.target.value)} />

      <button onClick={handleSubmit}>Valider</button>

    </main>
  );
}
