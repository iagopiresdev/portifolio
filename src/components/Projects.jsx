import '../styles/Projects.css'
import { projeto1, projeto2, projeto3, projeto4, projeto5, projeto6 , projeto7, projeto8} from "../assets/index.js"
import React, { useState } from 'react'

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
                                <a href='https://intelligallery.vercel.app' target="_blank">
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='https://github.com/iagopiresdev/intelligallery' target='_blank'>
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>INTELLIGALLERY</h2>
                    <p> <span>MONGODB</span> <span>EXPRESS</span> <span>REACT</span> <span>NODE.JS</span> <span>TAILWIND</span> <span>TYPESCRIPT</span> <span>OPENAI API</span></p>
                </div>

                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto2} alt="imagem de um projeto..." 
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='https://tik-tok-clone-seven-fawn.vercel.app/' target="_blank">
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='https://github.com/iagopiresdev/TikTok-clone' target='_blank'>
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>CLONE DO TIKTOK</h2>
                    <p> <span>REACT</span> <span>TYPESCRIPT</span> <span>FIREBASE</span></p>
                </div>

                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto3} alt="Space Invaders Game"
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='https://spaceinvaders-game.vercel.app/' target="_blank">
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='https://github.com/iagopiresdev/spaceinvaders-game' target="_blank">
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>SPACE INVADERS GAME</h2>
                    <p> <span>HTML</span> <span>JAVASCRIPT</span> <span>DOM</span> <span>POO/OOP</span></p>
                </div>

                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto4} alt="MVC Application"
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='https://github.com/iagopiresdev/ProgWeb/tree/main/game'>
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='https://github.com/iagopiresdev/ProgWeb/tree/main/game'>
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>  
                    <h2>MVC APPLICATION</h2>
                    <p> <span>NODE.JS</span> <span>EXPRESS</span> <span>SEQUELIZE</span> <span>SQL</span> <span>CRUD</span></p>
                </div>

                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto5} alt="imagem de um projeto..."
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
                    <h2>WEB SCRAPPER</h2>
                    <p> <span>JAVASCRIPT</span> <span>PUPPETEER</span></p>
                </div>

                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto8} alt="imagem de um projeto..."
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='https://gitfinder-iagopiresdev.vercel.app' target="_blank">
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='https://github.com/iagopiresdev/gitfinder' target="_blank">
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>GITFINDER</h2>
                    <p> <span>JAVASCRIPT</span> <span>REACT</span> <span>API</span></p>
                </div>

                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto6} alt="imagem de um projeto..."
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='https://to-do-list-mu-rouge.vercel.app/' target="_blank">
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='https://github.com/iagopiresdev/To-Do-List' target="_blank">
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>TODO LIST</h2>
                    <p> <span>HTML</span> <span>CSS</span> <span>JQUERY</span></p>
                </div>

                <div className="project" onMouseLeave={() => setMostrarBotoes(false)}>
                    <div className='image-container'>
                        <img src={projeto7} alt="imagem de um projeto..."
                            onMouseEnter={() => setMostrarBotoes(true)}>
                        </img>
                        {mostrarBotoes && (
                            <div className="button-container" >
                                <a href='https://harus-candy.vercel.app/' target="_blank">
                                    <button className='real-button-btn-1'>VER PROJETO</button>
                                </a>
                                <a href='https://github.com/iagopiresdev/Harus-Candy' target="_blank">
                                    <button className='real-button-btn-2'>VER CÓDIGO</button>
                                </a>
                            </div>
                        )}
                    </div>
                    <h2>DOCERIA HARU'S CANDY</h2>
                    <p> <span>HTML</span> <span>CSS</span></p>
                </div>
            </div>
        </div>
    )
}
