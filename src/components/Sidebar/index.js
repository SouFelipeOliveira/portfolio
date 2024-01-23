import { Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoF from '../../assets/images/logo-f.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/portfolio'>
            <img src={LogoF} alt='logo' />
            <img className="sub-logo" src={LogoSubtitle} alt='Felipe Oliveira' />

            <nav>
                <NavLink exact="true" activeClassname="active" to="/portfolio" >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
                </NavLink>
                <NavLink activeClassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>
                <NavLink activeClassname="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/felipe-oliveira-384b00265/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/SouFelipeOliveira"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />  
                    </a>
                </li>
            </ul>
        </Link>
    </div>
    );
}

export default Sidebar;

