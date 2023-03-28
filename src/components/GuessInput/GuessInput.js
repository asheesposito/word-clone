import React from "react";

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [guess, setGuess] = React.useState(''); //state hook

  function handleSubmit(event) {
    event.preventDefault();

    console.log({guess});
    handleSubmitGuess(guess);
    setGuess('');
  }

  return (
  <form onSubmit={handleSubmit} className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    {/* At first it wasn't working but it was
    because I had the same input name as the label name
    OR it was because it wasn't refreshed */}
    <input 
      required
      disabled={gameStatus !== 'running'}
      minLength={5}
      maxLength={5}
      value={guess} 
      onChange={(event) => {
        const nextGuess = event.target.value.toUpperCase();
        setGuess(nextGuess);
      }} //wiring up
      id="guess-input" 
      type="text" 
    />
  </form>
  );
}

export default GuessInput;
