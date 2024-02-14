import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoY from '../../assets/images/logo-Y.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoY} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Tohamy"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link"to="/about">
                    <FontAwesomeIcon icon={faUser} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="white" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferer' href='https://www.linkedin.com/in/yuseftohamy/'>
                    <FontAwesomeIcon icon={faLinkedin} color="white" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferer' href='https://github.com/Sef-s'>
                    <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar