import React from "react";
import Flip from "../../components/Flip";
import { flips } from "../../data";

import "./index.css";

function FlipCards() {
  return flips.map((flip, id) => {
    return (
      <Flip
        key={id}
        href={flip.liveDemo}
        photo={flip.image}
        github={flip.githubRepo}
      >
        <p>{flip.description}</p>
      </Flip>
    );
  });
}

export default FlipCards;
