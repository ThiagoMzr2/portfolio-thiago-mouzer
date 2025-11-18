import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import thiago_imagem from '../assets/images/th.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={thiago_imagem} className="zoom" alt="thumbnail" width="100%" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ThiagoMzr2" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thiago-mouzer-93ba3326b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Thiago Mouzer</h1>
          <p>Sobre Mim</p>
          <p>Atualmente cursando Sistemas de Informação no Unilasalle-RJ, sou um estudante dedicado com o objetivo de desenvolver minha carreira na área de dados. Ao longo da minha formação, adquiri experiência prática nas áreas de Front-end, Back-end e Full-stack, mas foi na análise de dados que encontrei uma verdadeira vocação. Minha jornada acadêmica foi enriquecida com projetos significativos, incluindo minha participação no NASA Space Apps Challenge. No evento, nosso projeto “Smog Detector” se destacou e foi reconhecido como finalista global, um marco que consolidou minha determinação em buscar soluções inovadoras e eficazes.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ThiagoMzr2" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thiago-mouzer-93ba3326b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;