import { useEffect, useState } from "react";
import { pitanja } from "./pitanja";
import { Pitanja } from "./questions";

export const Kviz = () => {
  const [kviz, postaviPitanja] = useState([]);
  const [redniBrojPitanja, postaviRedniBrojPitanja] = useState(0);
  const [result, setResult] = useState(0);

  // BUTTONS ID's
  const nextButton = document.getElementById("nextButton");
  const startQuiz = document.getElementById("startQuiz");

  // USE EFFECT TO STOP RE-RENDERING TOO MANY TIMES
  useEffect(() => {
    if (kviz.length === 3) {
      return;
    } else {
      postaviPitanja([...kviz, pitanja]);
      console.log(kviz);
    }
  }, [kviz]);

  console.log(redniBrojPitanja);

  // SET UP THE QUESTION NUMBER --------------------------

  const Broj = () => {
    postaviRedniBrojPitanja(redniBrojPitanja + 1);

    if (redniBrojPitanja === 0) {
      startQuiz.classList.add("hide");

      return;
    }

    if (redniBrojPitanja >= 1) {
      console.log(redniBrojPitanja);
      startQuiz.classList.add("hide");
    }
  };

  if (redniBrojPitanja > 3 && result !== 6) {
    return (
      <>
        <h1 className="finishTitle">
          <h2>Your result is: {result} points.</h2>
          THE MOST IMPORTANT IS THAT YOU KNOW YOURSELF
        </h1>
      </>
    );
  }

  if (redniBrojPitanja > 3 && result === 2) {
    return (
      <>
        <h1 className="finishTitle">
          <h2>Your result is: {result} points.</h2>
          THE MOST IMPORTANT IS THAT YOU KNOW YOURSELF
        </h1>
      </>
    );
  }

  if (result === 6) {
    return (
      <>
        <h1 className="finishTitle">
          <h2>Your result is: {result} points.</h2>YOU'VE WON! BUT YOU STILL
          DON'T KNOW ME
        </h1>
      </>
    );
  }
  if (redniBrojPitanja < 3 && result === 4) {
    return (
      <>
        <h1 className="finishTitle">
          <h2>Your result is: {result} points.</h2>
          THE MOST IMPORTANT IS THAT YOU KNOW YOURSELF
        </h1>
      </>
    );
  }

  if (redniBrojPitanja < 3 && result === 2) {
    return (
      <>
        <h1 className="finishTitle">
          <h2>Your result is: {result} points.</h2>
          THE MOST IMPORTANT IS THAT YOU KNOW YOURSELF
        </h1>
      </>
    );
  }
  // -------------------------------------------------

  return (
    <>
      <div className="Quiz">
        {/* FOR EACH OBJECT IN THE ARRAY WE CREAT THE COMPONENT */}
        {pitanja.map((pitanje, i) => (
          <div key={i}>
            <Pitanja
              pitanje={pitanje}
              redniBrojPitanja={redniBrojPitanja}
              postaviRedniBrojPitanja={postaviRedniBrojPitanja}
              result={result}
              setResult={setResult}
              nextButton={nextButton}
            />
          </div>
        ))}

        {/* -------------------- BUTTONS FUNCTIONS ------------------ */}

        <button onClick={Broj} className="nextButton hide" id="nextButton">
          NEXT QUESTION
        </button>

        <button id="startQuiz" onClick={Broj} className="startQuiz">
          START THE QUIZ!
        </button>
      </div>
    </>
  );
};
