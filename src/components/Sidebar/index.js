import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoY from '../../assets/images/logo-Y.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faGear, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className="sub-logo" src={LogoSubtitle} alt="Tohamy"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#FBFBFB" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                    <FontAwesomeIcon icon={faSuitcase} color="#FBFBFB" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#FBFBFB" />
            </NavLink>  
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#FBFBFB" />
            </NavLink> 
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferer' href='https://www.linkedin.com/in/yuseftohamy/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#FBFBFB" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferer' href='https://github.com/Sef-s'>
                    <FontAwesomeIcon icon={faGithub} color="#FBFBFB" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferer' href='https://www.instagram.com/yusef.t/'>
                    <FontAwesomeIcon icon={faInstagram} color="#FBFBFB" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferer' href='https://open.spotify.com/user/0hzbdvn9dm263s5fdfbg3h5be'>
                    <FontAwesomeIcon icon={faSpotify} color="#FBFBFB" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar