import './Projects.css'
import projeto1 from "./assets/projeto1.webp"
import projeto2 from "./assets/projeto2.webp"
import projeto3 from "./assets/projeto3.webp"
import projeto4 from "./assets/projeto4.webp"
import React, { useEffect, useState } from 'react'

export default function Projects() {
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
    return (
        <div className="projects">
            <div className="projects-header">
                <h1>Projetos</h1>
                <a href='#contato'>
                    <button>CONTATE-ME</button>
                </a>
            </div>
            
            <div className="projects-container">
                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto1} alt="imagem de um projeto..." 
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='#'>
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='#'>
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>DESIGN PORTIFOLIO</h2>
                    <p> <span>HTML</span> <span>CSS</span></p>
                </div>
                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto2} alt="imagem de um projeto..."
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='#'>
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='#'>
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>DESIGN PORTIFOLIO</h2>
                    <p> <span>HTML</span> <span>CSS</span></p>
                </div>
                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto3} alt="imagem de um projeto..."
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='#'>
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='#'>
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>  
                    <h2>DESIGN PORTIFOLIO</h2>
                    <p> <span>HTML</span> <span>CSS</span></p>
                </div>
                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto4} alt="imagem de um projeto..."
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='#'>
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='#'>
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>DESIGN PORTIFOLIO</h2>
                    <p> <span>HTML</span> <span>CSS</span></p>
                </div>
            </div>
        </div>
    )
}
