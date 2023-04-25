import './Header.css'
import iconGithub from './assets/icon-github.svg'
import iconLinkedin from './assets/icon-linkedin.svg'

export default function Header() {
    return (
        <div className="header">
            <h2>iagopires</h2>
            <div className='icons'>
                <a href="https://github.com/iagopiresdev" target="_blank">
                    <img src={iconGithub} className="logo" alt="Github logo" />
                </a>
                <a href='https://www.linkedin.com/in/iagopiresdev/' target='_blank'>
                    <img src={iconLinkedin} className="logo" alt="Linkedin logo" />
                </a>
            </div>
        </div>
    )
}