import React from "react";
import video from "./videos/work.mp4";
import photo from "./images/pro-2.png";
import "./index.css";
import photoNasa from "./images/pro-6.png";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
function App() {
  return (
    <main className='app'>
      <Background />
      <section className='main-wrapper'>
        <div className='navigation'>
          <div className='icons-wrapper'>
            <span>{<AiFillHome />}</span>
            <span>{<CgProfile />}</span>
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
          <Flip href='https://vaniatavares.github.io/Project1/' photo={photo}>
            <p>
              Project <u>From Zero</u> was made in collaboration with Junior
              Developers in group of five for practising Html, Css, Git Bash and
              Github.
            </p>
          </Flip>
          <Flip />
          <Flip />
          <Flip />
          <Flip />
        </div>
        <p className='my-name'> Michaela Vojtova</p>
      </section>
    </main>
  );
}

export default App;

function Flip({ photo, children, href }) {
  return (
    <div className='flip-container'>
      <div className='flip-card'>
        <div className='front'>
          <img src={photo} alt='' />
        </div>
        <div className='back'>
          <div className='demo-text'>{children}</div>

          <button className='demo-btn'>
            <a href={href} target='_blank' rel='noreferrer'>
              Demo Here
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className='video'>
      <video
        autoPlay
        muted
        style={{
          position: "fixed",
          zIndex: "-1",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          display: "flex",
        }}
      >
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  );
}
