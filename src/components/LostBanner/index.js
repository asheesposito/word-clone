import React from "react";

import Banner from "../Banner/Banner";

function LostBanner({ numOfGuesses }) {
  return (
    <Banner status="sad">
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>
              {numOfGuesses === 1
                ? '1 guess'
                : `${numOfGuesses} guesses`
              }
            </strong>
          </p>
      </Banner>
  );
}

export default LostBanner;