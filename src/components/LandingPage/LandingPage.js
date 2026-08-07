import React from 'react';

function LandingPage({ onStart }) {
  return (
    <div className="landing-page">
      <h2>Guess the word in 6 tries.</h2>
      <p>
        Each guess must be a valid 5-letter word. After each guess, the
        color of the tiles will change to show how close your guess was
        to the answer.
      </p>
      <button className="landing-page-start-btn" onClick={onStart}>
        Play
      </button>
    </div>
  );
}

export default LandingPage;
