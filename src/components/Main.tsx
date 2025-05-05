import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src="/th.png" alt="Avatar" width="200" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ThiagoMzr2" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thiago-mouzer-93ba3326b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Thiago Mouzer</h1>
          <p>Estudante de Sistemas de Informação</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;