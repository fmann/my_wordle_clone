import React from "react";

function EntryForm({ currentGuess, setCurrentGuess, submitGuess }) {
  function submitHandler(e) {
    e.preventDefault();
    if (currentGuess.length !== 5) {
      return;
    }
    submitGuess();
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
        maxLength="5"
      />
    </form>
  );
}

export default EntryForm;
