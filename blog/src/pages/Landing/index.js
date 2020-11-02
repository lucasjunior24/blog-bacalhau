import React from 'react';
import { Link } from "react-router-dom";

import Landing from '../../img/landing.svg'
import Bac from '../../img/bac.jpeg'

import './styles.css'

export default function Landing() {
    return (
        <div className='container'>
            <section className='banner'>
                <div className='content-banner'>
                    <div className='grid-row1'>
                        <h1>Pergunte pro <br/> Bacalhau!</h1>
                        <img src={Landing} alt='Landing' />   
                    </div>

                    <div className='grid-row2'>
                        <div className='botoes'>
                            <Link to="/login"><button className='btnP2'>Fazer uma Pergunta</button></Link>
                            <a><button className='btnP3'>Perguntas já Feitas</button></a>       
                        </div>
                        <div className='texto'>
                            <p>Tire suas dúvidas com quem já trabalha com Tecnologia há anos</p>
                        </div>
                    </div> 
                </div>             
            </section>
            
            <section className='sobre'>
                <div className='content-sobre'>
                    <div className='content-base'>
                        <div className='logoM'>
                            <div className='column'>
                                <h2>Pergunte pro Bacalhau!</h2>
                                <p>Tire suas duvidas em tecnologia <br/> com o Mestre Bacalhau!</p>
                            </div>
                        </div>
                        <div className='bio'>
                            <div className='column'>
                                <h2>Professor Paulo Fonseca</h2>
                                <p>Mestre em ciencia da coputação</p>
                                <p>Professor a mais de 20 anos</p>
                            </div>
                        </div>
                    </div>

                    <div className='content-historia'>
                        <div className='row'>
                            <div>
                                <img src={Bac} alt='Foto Bacalhau' className='bacalhau' />
                                <h4>
                                    Nascido em portugal em ...<br />
                                    Sempre teve interesse por tecnologia...
                                </h4>
                            </div> 
                        </div>
                    </div> 
                </div>               
            </section>                           
        </div>
    )
};