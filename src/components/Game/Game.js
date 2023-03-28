import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
  //const [guess, setGuess] = React.useState('');

  function handleSubmitGuess(tentativeGuess){
    //console.log('Received guess', guess)
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  return (
    <>
      {gameStatus}
      <GuessResults guesses={guesses} answer={answer} /> {/* part of prop drilling */}
      <GuessInput 
        gameStatus={gameStatus} 
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'won' && (
        <WonBanner
        numOfGuesses={guesses.length} 
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner
        answer={answer} 
        />
      )}
      {/* <GuessResults guess={guess}/>
      <GuessInput guess={guess} setGuess={setGuess} /> */}
    </>
  );
}

export default Game;
