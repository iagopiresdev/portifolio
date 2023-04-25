import './Sobre.css';
import perfil from './assets/perfil.png';

export default function Sobre() {
  return (
    <div className='sobre'>
        <div className='apresentacao'>
        <h1>
            Opa! Prazer em <wbr/>conhecê-lo<br/>Meu nome é <span className="nome">Iago Pires</span>.</h1>
        <p>
            Direto do Amazonas, Brazil! <br/> Sou um desenvolvedor fullstack aficcionado por novas tecnologias!
        </p>
        <a href="#contato">
            <button className="contato">CONTATE-ME</button>
        </a>
        </div>
        <div className='perfil'>
            <img src={perfil} className="perfil" alt="Foto de perfil" />
        </div>
    </div>
  );
}
