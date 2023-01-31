import React from "react";
import { range } from "../../utils";
import GuessRow from "../GuessRow";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <GuessRow key={i} guess={guesses[i]} />
      ))}
    </div>
  );
}

export default GuessResults;
