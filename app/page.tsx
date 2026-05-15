"use client";

import { useEffect, useState } from "react";



export default function Home() {

  const questions = [
    {
      text: "Quelle est la capitale de la France ?",
      reponse: "Paris",
      points: 1,
      category: "Géographie"
    },
    {
      text: "Quel est le résultat de 2 + 2 ?",
      reponse: "4",
      points: 1,
      category: "Mathématiques"
    },
    {
      text: "Qui a écrit 'Les Misérables' ?",
      reponse: "Victor Hugo",
      points: 1,
      category: "Littérature"
    },
    {
      text: "Quelle est la formule chimique de l'eau ?",
      reponse: "H2O",
      points: 1,
      category: "Sciences"
    },
    {
      text: "Qui est la plus belle femme du monde ?",
      reponse: "Clara",
      points: 1,
      category: "Secret"
    }
  ];

  // État pour stocker la reponse du joueur
  const [reponseJoueur, setReponseJoueur] = useState("");

  // Tableau pour stocker les reponses du joueur
  const [reponsesJoueur, setReponsesJoueur] = useState<ReponseJoueurType[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  // Récupérer la question actuelle
  const questionActuelle = questions[questionIndex];
  const [tempsRestant, setTempsRestant] = useState(10);

  const timer = setInterval(() => {
    setTempsRestant((ancienTemps) => ancienTemps - 1);
  }, 1000);

  const [quizTermine, setQuizTermine] = useState(false);

  type ReponseJoueurType = {
    question: string;
    reponse: string;
    points: number;
    reponseCorrecte: string;
    category: string;
    isCorrect: boolean | null;
  };

    useEffect(() => {
  if (tempsRestant <= 0) {
    reponseSuivante()
    return;
    
  }

  return () => clearInterval(timer);
}, [tempsRestant]);

  function reponseSuivante() {
    const reponseASauvegarder = {
      question: questionActuelle.text,
      reponse: reponseJoueur,
      points: questionActuelle.points,
      reponseCorrecte: questionActuelle.reponse,
      category: questionActuelle.category,
      isCorrect: null
    };

    setReponsesJoueur([...reponsesJoueur, reponseASauvegarder]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setTempsRestant(5);
    } else {
      setQuizTermine(true);
    }

    setReponseJoueur("");
  }  

  if (quizTermine) {
    return(
      <main>
        <header>
          <h1>ADA Quiz</h1>
        </header>

        <h2>Quiz Terminé !</h2>

        {reponsesJoueur.map((r, index) => (
          <div key={index}>
            <p>
              {r.question} - {r.reponse} - {r.points} - {r.category}
            </p>
            <button>Correct</button>
            <button>Incorrect</button>
          </div>
        ))
        } 
      </main>
    )
  }


  return (
    <main>
      <header>
        <h1>ADA Quiz</h1>
      </header>
      
      <h3>{questionIndex + 1}/{questions.length}</h3>

      <h2>{questionActuelle.text}</h2>

      <input type="text" value={reponseJoueur} onChange={(event) => setReponseJoueur(event.target.value)} />

      <p> Timer : {tempsRestant}</p>

      {reponsesJoueur.map((r, index) => (
        <p key={index}>
          {r.question} - {r.reponse} - {r.points} - {r.category}
        </p>
      ))}

    </main>
  );
}
 