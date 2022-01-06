import React from "react";

import photo from "../../images/pro-2.png";
import "./index.css";
import photoNasa from "../../images/pro-6.png";
import game from "../../images/games-12.png";
import music from "../../images/adele.jpeg";
import travel from "../../images/travel-1.png";

import Flip from "../../components/Flip";
import Background from "../../components/Background";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";

function MainPage() {
  return (
    <main className='app'>
      <Background />

      <section className='main-wrapper'>
        <div className='navigation'>
          <div className='icons-wrapper'>
            <span>{<AiFillHome />}</span>
            <span>{<CgProfile />}</span>
          </div>
        </div>

        <div className='flip-card-wrapper'>
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

          <Flip
            href='https://misavojtova.github.io/music-app-final/'
            photo={music}
          >
            <p>
              Project <u>Music App</u> was built in 24 hours in collaboration
              with Junior Developers to take part in competition which was
              organized by Wild Code School Academy.
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
              Project <u>Game App</u> was one day project to strengthen my
              knowledge in React.js, fetching data from API, imporivng Html,
              Css, Javascript and workflow in Git Bash and Github.
            </p>
          </Flip>
          <Flip
            href='https://misavojtova.github.io/travel-git-recommendations/'
            photo={travel}
          ></Flip>
          <Flip />
        </div>

        <div className='navigation'>
          <div className='icons-wrapper'>
            <span>
              <a
                href='https://github.com/misavojtova'
                target='_blank'
                rel='noreferrer'
              >
                {<BsGithub />}
              </a>
            </span>
            <span>
              <a
                href='https://www.linkedin.com/in/michaela-vojtova-917782170/'
                target='_blank'
                rel='noreferrer'
              >
                {<BsLinkedin />}
              </a>
            </span>
          </div>
        </div>
        <p className='my-name'> Michaela Vojtova</p>
      </section>
    </main>
  );
}

export default MainPage;
