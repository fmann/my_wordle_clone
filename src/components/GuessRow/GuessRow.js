import React from "react";
import { range } from "../../utils";

function GuessRow({ i, guess }) {
  function getClassNames(letterPosition) {
    const classes = guess ? `cell ${guess[letterPosition].status}` : "cell";
    return classes;
  }

  return (
    <p key={i} className="guess">
      {range(0, 5).map((letterPosition) => (
        <span key={letterPosition} className={getClassNames(letterPosition)}>
          {guess && guess[letterPosition].letter}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
