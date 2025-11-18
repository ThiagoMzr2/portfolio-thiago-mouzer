import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faMagnifyingGlassChart, faSquarePollVertical, faGear} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript",
    "HTML",
    "CSS",
];

const labelsSecond = [
    "SQL",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "MariaDB"
];

const labelsThird = [
    "PowerBi",
    "Modelagem de Dados",
 
];

const labelsFourth = [
    "Pandas",
    "Numpy",
    "MatPlotLib",
];

const labelsFive = [
    "Python",
    "Dax",
    "Java",
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Habilidades</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Desenvolvimento Front-End</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Banco de dados</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faSquarePollVertical} size="3x"/>
                    <h3>Visualização</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="skill">
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} size="3x"/>
                    <h3>Análise de Dados</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title">Pacotes:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>        

                 <div className="skill">
                    <FontAwesomeIcon icon={faGear} size="3x"/>
                    <h3>Desenvolvimento Back-End</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsFive.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>      

            </div>
        </div>
    </div>
    );
}

export default Expertise;