import { useRef } from "react";

export const Pitanja = ({
  pitanje,
  postaviRedniBrojPitanja,
  redniBrojPitanja,
  result,
  setResult,
  nextButton,
}) => {
  //
  if (redniBrojPitanja >= 3) {
    nextButton.classList.add("hide");
  }
  const check = (e, q) => {
    console.log(e);
    console.log(q);
    if (e === 3) {
      setResult(result + 2);
      postaviRedniBrojPitanja(redniBrojPitanja + 1);
    }

    if (e === "Mario") {
      setResult((result += 2));
      postaviRedniBrojPitanja(redniBrojPitanja + 1);
    }

    if (e === "Snake") {
      setResult(result + 2);
      postaviRedniBrojPitanja(redniBrojPitanja === 3);
      console.log(redniBrojPitanja);
    } else {
      console.log("Try Again...");
      postaviRedniBrojPitanja(redniBrojPitanja + 1);
    }
  };

  // useRef for answers -------------
  let option1 = useRef(pitanje.answer1.p1);
  let option2 = useRef(pitanje.answer2.p1);
  let option3 = useRef(pitanje.answer3.p1);

  // SET UP CONDITIONS FOR QUESTINO DISPLAY -----------------------------

  if (pitanje.id === redniBrojPitanja) {
    return (
      <div className="questionTable">
        <h3 className="mainQuestion">{pitanje.question}</h3>
        <div
          useref={option1}
          className="answerButton"
          onClick={(e) => {
            check(e.target.innerHTML, option1.current);
          }}
        >
          {pitanje.answer1.p1}
        </div>
        <div
          useref={option2}
          className="answerButton"
          onClick={(e) => {
            check(e.target.innerHTML, option2.current);
          }}
        >
          {pitanje.answer2.p1}
        </div>
        <div
          className="answerButton"
          useref={option3}
          onClick={(e) => {
            check(e.target.innerHTML, option3.current);
          }}
        >
          {pitanje.answer3.p1}
        </div>
      </div>
    );
  }

  if (redniBrojPitanja === 0 || redniBrojPitanja >= 4) {
    return;
  } else {
    console.log("Please continue...");
  }
};
