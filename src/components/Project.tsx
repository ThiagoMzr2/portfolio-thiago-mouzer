import React from "react";
import mock01 from '../assets/images/bi1.png';
import mock02 from '../assets/images/bi2.png';
import mock03 from '../assets/images/bi3.png';
import mock04 from '../assets/images/bi4.png';
import mock05 from '../assets/images/bi5.png';
import mock06 from '../assets/images/bi6.png';
import mock07 from '../assets/images/bi7.png';
import mock08 from '../assets/images/bi8.png';
import cert1 from '../assets/images/cert1.png';
import cert2 from '../assets/images/cert2.png';
import cert3 from '../assets/images/cert3.png';
import cert4 from '../assets/images/cert4.png';
import cert5 from '../assets/images/cert5.png';
import cert6 from '../assets/images/cert6.jpg';
import cert7 from '../assets/images/cert7.png';
import cert8 from '../assets/images/cert8.png';
import cert9 from '../assets/images/cert9.png';
import cert10 from '../assets/images/cert10.png';
import cert11 from '../assets/images/cert11.png';


import '../assets/styles/Project.scss';

// href="" target="_blank" (SE EU QUISER DEPOIS LINKAR PARA OUTRA ABA OU SITE)

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projetos e Certificados</h1>
            <div className="projects-grid">
                <div className="project">
                    <a rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Dashboard Analítico do Mercado de Ações com Narrativa inteligente</h2></a>
                    <p>Este projeto é um Dashboard Analítico do Mercado de Ações que utiliza narrativa inteligente para apresentar dados como volume negociado, médias de preço (abertura, fechamento, alta e baixa) e variações mensais ao longo de 2022. Ele destaca informações de empresas como IBM, Microsoft, Oracle, Tesla e Walmart, mostrando tendências e comparativos, como a variação de 50% na média de fechamento. O objetivo é oferecer uma visão clara e organizada do desempenho do mercado, auxiliando na análise e na tomada de decisões.</p>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Análise de Dados de Logística</h2></a>
                    <p>Este painel apresenta uma análise de dados logísticos com foco no desempenho das entregas. São registradas 54 mil entregas, das quais 47 mil foram realizadas no prazo. A análise inclui a distribuição das entregas no prazo por canal, a quantidade total de entregas por mês e o percentual de entregas por equipe regional, sendo as regiões Norte e Sudeste as mais representativas. Também é exibido o percentual por status de entrega, com a maioria sendo antecipada, além de informações detalhadas por cidade e vendedor, permitindo identificar gargalos e oportunidades de melhoria na operação logística.</p>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Dashboard de Análise Financeira</h2></a>
                    <p>Este painel apresenta uma análise financeira detalhada, destacando os principais indicadores de desempenho, como total de receitas (1,92 milhões), total de despesas (1,15 milhões) e margem de lucro (0%). Os dados são organizados por componentes de receita e despesa, com gráficos que ilustram a distribuição e evolução dos valores. Há também uma segmentação por perfis, baseada na média de valor e na contagem da população por segmento. A análise inclui a evolução dos dados financeiros por ano (2019, 2020 e 2022), permitindo uma visão comparativa dos resultados ao longo do tempo</p>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Análise de Campanhas de Marketing</h2></a>
                    <p>O Mini-Projeto 1 apresenta uma análise de campanhas de marketing utilizando Power BI, com foco na compreensão do perfil, comportamento e preferências dos clientes. O painel é dividido em quatro visões principais: cliente, comportamento, campanhas e pontos de venda. Na visão cliente, são exibidos indicadores como total de clientes, média salarial, volume de compras em diferentes canais e segmentações por escolaridade, estado civil e país, permitindo uma visão geral dos dados relevantes para decisões de marketing.</p>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Dashboard Comercial - Performance de Vendas</h2></a>
                    <p>Este mini-projeto apresenta um painel interativo desenvolvido para análise da performance comercial, com foco na identificação dos principais influenciadores de vendas, análise por categorias, pontos de venda e desempenho dos vendedores por região. O projeto também conta com uma narrativa inteligente que orienta a interpretação dos dados de forma estratégica e acessível.</p>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>
                        Engenharia de Producão com Power BI e IA - Prevendo a Produção Industrial ao Longo do Tempo</h2></a>
                    <p>Este projeto integra Power BI com Inteligência Artificial para monitorar e prever a produção industrial com base em dados históricos segmentados por turno e faixa etária dos funcionários. O dashboard mostra a média de unidades produzidas ao longo do tempo, identifica possíveis anomalias e apresenta uma previsão de produção com horizonte de 5 anos, apoiando a gestão estratégica e a tomada de decisão na indústria.</p>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2> Detecção de Anomalias em Transações Financeiras com Linguagem R e Power BI</h2></a>
                    <p>Este projeto de BI utiliza Power BI e linguagem R para identificar possíveis fraudes em transações financeiras por meio de análise de score de anomalia. O dashboard apresenta a distribuição dos scores, comparação entre transações normais e anômalas, e estatísticas como a média e o maior score detectado, auxiliando no monitoramento e tomada de decisões preventivas.</p>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Segmentação de Clientes para Estratégias de Marketing</h2></a>
                    <p>Este dashboard de Business Intelligence analisa a base de 500 clientes por meio da segmentação em três grupos distintos, apresentando métricas como idade média, renda anual, pontuação média de gastos e quantidade de clientes por segmento. Ele fornece insights valiosos para direcionamento de campanhas e estratégias de marketing.</p>
                </div>
                <br></br>
                <p></p>
                <div className="project">
                    <a rel="noreferrer"><img src={cert1} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Microsoft Power BI Para Business Intelligence e Data Science</h2></a>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={cert2} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Básico</h2></a>
                </div>
                <div className="project">
                    <a rel="noreferrer"><img src={cert3} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Introdutório</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert5} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Intermediário</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert6} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Excel na prática - Fundação Bradesco</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert11} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Modelagem de dados - Fundação Bradesco</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>TOTVS Backoffice (Linha RM) – Consultas SQL + Inteligência de Negócios</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert8} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>TOTVS Educacional - Ensino Básico</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert7} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>TOTVS BACKOFFICE (LINHA RM) - GESTAO FINANCEIRA</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert9} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Agile Explorer - IBM</h2></a>
                </div>

                <div className="project">
                    <a rel="noreferrer"><img src={cert4} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a rel="noreferrer"><h2>Vencedor Nasa Space Apps Niterói e Finalista Global pela Equipe Ufo Do Rio</h2></a>
                </div>




            </div>
        </div>
    );
}

export default Project;