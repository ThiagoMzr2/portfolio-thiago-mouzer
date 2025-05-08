import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ThiagoMzr2" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/thiago-mouzer-93ba3326b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfólio projetado e construído por <a href="https://github.com/ThiagoMzr2/portfolio-thiago-mouzer" target="_blank" rel="noreferrer">Thiago Mouzer</a></p>
    </footer>
  );
}

export default Footer;