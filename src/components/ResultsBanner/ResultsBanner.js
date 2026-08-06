import React from 'react';

function ResultsBanner({ isGameWon, answer, guessListIndex, resetGame }) {
  const bannerColour = isGameWon ? "happy banner" : "sad banner"
  const bannerWinText = <p><strong>Mission success!</strong> Codeword locked in <strong>{guessListIndex} transmissions</strong>.</p>
  const bannerLostText = <p>Mission aborted. The target codeword was <strong>{answer}</strong>.</p>
  return (
    <div className={bannerColour}>
      {isGameWon ? bannerWinText : bannerLostText}
      <button onClick={resetGame}>Launch new mission</button>
    </div>
  )
}

export default ResultsBanner;