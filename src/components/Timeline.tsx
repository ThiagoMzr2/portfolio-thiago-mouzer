import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experiências</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="04/2023 - 12/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Estagiário de Ti - Frossard Informática</h3>
            <h4 className="vertical-timeline-element-subtitle">Rio Bonito, RJ</h4>
            <p>
              Gerenciamento de sistemas, gerenciamento de projetos e suporte de hardware de TI.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work2"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="07/2025 - Em andamento"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Estagiário de Integração de Dados - Inspira Rede de Educadores</h3>
            <h4 className="vertical-timeline-element-subtitle">Centro, RJ</h4>
            <p>
              Atuo no time de Integração de Dados, realizando coleta, mapeamento, tratamento e análise de dados de diversas fontes (planilhas, bancos de dados, APIs). Também contribuo nos processos de migração de dados entre sistemas corporativos, além de documentar, automatizar e executar rotinas de ETL e integração de dados.
              <p></p>
              Como parte do meu Plano de Desenvolvimento Individual (PDI), busco evoluir em ferramentas de integração, SQL, consumo de APIs e modelagem de dados, visando maior autonomia e eficiência nas entregas.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>


  );
}

export default Timeline;