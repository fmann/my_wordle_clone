import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { REQUIRE_VALID_WORD, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import EntryForm from "../EntryForm";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [gameStatus, setGameStatus] = React.useState("");

  function containsIncorrectLetter(row) {
    for (let i = 0; i < row.length; i++) {
      if (row[i].status !== "correct") {
        return true;
      }
    }
    return false;
  }

  function submitGuess() {
    if (REQUIRE_VALID_WORD && WORDS.indexOf(currentGuess) === -1) {
      console.log("Invalid guess");
      return;
    }

    const currentGuessResult = checkGuess(currentGuess, answer);

    const updatedGuesses = [...guesses, currentGuessResult];
    setGuesses(updatedGuesses);
    setCurrentGuess("");
    if (containsIncorrectLetter(currentGuessResult) === false) {
      setGameStatus("win");
    } else if (updatedGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  }

  return (
    <>
      {gameStatus === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> You got it in
            <strong>
              {" "}
              {guesses.length} guess{guesses.length > 1 && "es"}
            </strong>
            .
          </p>
        </div>
      )}

      {gameStatus === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}

      <GuessResults guesses={guesses} />
      {gameStatus === "" && (
        <EntryForm
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          submitGuess={submitGuess}
        />
      )}
    </>
  );
}

export default Game;
