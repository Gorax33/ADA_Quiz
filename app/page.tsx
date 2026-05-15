"use client";

import { useState } from "react";


export default function Home() {

  // État pour stocker la reponse du joueur
  const [reponseJoueur, setreponseJoueur] = useState("");

  type ReponseJoueurType = {
    question: string;
    reponse: string;
    points: number;
    reponseCorrecte: string;
  };

  // Tableau pour stocker les reponses du joueur
  const [reponsesJoueur, setreponsesJoueur] = useState<ReponseJoueurType[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);

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

  // Récupérer la question actuelle
  const questionActuelle = questions[questionIndex];

  function clickValider() {
    const reponseASauvegarder = {
      question: questionActuelle.text,
      reponse: reponseJoueur,
      points: questionActuelle.points,
      reponseCorrecte: questionActuelle.reponse,
    };

    setreponsesJoueur([...reponsesJoueur, reponseASauvegarder]);
    console.log(reponseASauvegarder);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Quiz terminé !");
    }

    setreponseJoueur("");
  }

  return (
    <main>
      <header>
        <h1>ADA Quiz</h1>
      </header>
      
      <h3>{questionIndex + 1}/{questions.length}</h3>

      <h2>{questionActuelle.text}</h2>

      <input type="text" value={reponseJoueur} onChange={(event) => setreponseJoueur(event.target.value)} />

      <button onClick={clickValider}>Valider</button>

    </main>
  );
}
 