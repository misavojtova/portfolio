import React from "react";
import video from "./videos/work.mp4";
import photo from "./images/pro-2.png";
import "./index.css";

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
            <icon>{<AiFillHome />}</icon>
            <icon>{<CgProfile />}</icon>
            <icon>{<BsGithub />}</icon>
            <icon>{<BsLinkedin />}</icon>
          </div>
        </div>
        <div className='flip-card-wrapper'>
          <Flip photo={photo}>
            This Project was made in collaboration with other junior developer.
            We worked in team of five people. I worked on home page.
          </Flip>
          <Flip />
          <Flip />
          <Flip />
          <Flip />
          <Flip />
        </div>
        <h3> Michaela Vojtova</h3>
      </section>
    </main>
  );
}

export default App;

function icon({ children }) {
  return <span>{children}</span>;
  // return (
  //   <>
  //     <span>{<BsGithub />}</span>
  //     <span>{<BsLinkedin />}</span>
  //     <span>{<CgProfile />}</span>
  //   </>
  // );
}

function Flip({ photo, children }) {
  return (
    <div className='flip-container'>
      <div className='flip-card'>
        <div className='front'>
          <img src={photo} alt='' />
        </div>
        <div className='back'>
          <p>{children}</p>
          <button>
            <a
              href='https://vaniatavares.github.io/Project1/'
              target='_blank'
              rel='noreferrer'
            >
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
