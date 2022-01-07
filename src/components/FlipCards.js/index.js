import React from "react";
import photo from "../../images/pro-2.png";
import photoNasa from "../../images/pro-6.png";
import game from "../../images/games-12.png";
import music from "../../images/adele.jpeg";
import travel from "../../images/travel-1.png";
import travel4 from "../../images/travel4.png";

import Flip from "../../components/Flip";
import "./index.css";
function FlipCards() {
  return (
    <>
      <Flip
        href='https://misavojtova.github.io/project-nasa/'
        photo={photoNasa}
      >
        <p>
          Project <u>Nasa</u> was built by a group of Junior Developers for
          learning purposes. Fetching data from API, improving Html, Css,
          JavaScript and React.js.
        </p>
      </Flip>

      <Flip href='https://misavojtova.github.io/music-app-final/' photo={music}>
        <p>
          Project <u>Music App</u> was built in 24 hours in collaboration with
          Junior Developers to take part in competition which was organized by
          Wild Code School Academy.
        </p>
      </Flip>

      <Flip href='https://vaniatavares.github.io/Project1/' photo={photo}>
        <p>
          Project <u>From Zero</u> was made in collaboration with Junior
          Developers in group of five for practising Html, Css, Git Bash and
          Github.
        </p>
      </Flip>

      <Flip photo={game} href='https://misavojtova.github.io/game-app/'>
        <p>
          Project <u>Game App</u> was one day project to strengthen my knowledge
          in React.js, fetching data from API, imporivng Html, Css, Javascript
          and workflow in Git Bash and Github.
        </p>
      </Flip>

      <Flip
        href='https://misavojtova.github.io/travel-git-recommendations/'
        photo={travel4}
      >
        <p>
          Project <u>Game App</u> was one day project to strengthen my knowledge
          in React.js, fetching data from API, imporivng Html, Css, Javascript
          and workflow in Git Bash and Github.
        </p>
      </Flip>
      <Flip></Flip>
    </>
  );
}

export default FlipCards;
