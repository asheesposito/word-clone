import React from "react";

import Banner from "../Banner/Banner";

function LostBanner({ answer }) {
  return (
    <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      </div>
  )
}

export default LostBanner;
