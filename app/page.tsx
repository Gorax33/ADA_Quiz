"use client";

import { useState } from "react";

//Fonction ajouter 1 point au score et afficher le score
export default function Home() {
  const [score, setScore] = useState(0);

  return (
    <main>
      <h1>Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Ajouter 1 point</button>
    </main>
  );
}