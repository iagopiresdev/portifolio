import '../styles/Sobre.css';
import { perfil } from '../assets/index';

export default function Sobre() {
  return (
    <div className='sobre'>        
        <div className='perfil'>
            <img src={perfil} className="perfil" alt="Foto de perfil" />
        </div>
        <div className='apresentacao'>
        <h1>
            Opa! <br/>É um imenso <wbr/>prazer. <br/>Sou <span className="nome">Iago Pires</span>.</h1>
        <p>
            Sou um desenvolvedor júnior FullStack. <br/>Diretamente do Amazonas, Brasil.
        </p>
        <a href="#contato">
            <button className="contato">CONTATE-ME</button>
        </a>
        </div>

    </div>
  );
}
