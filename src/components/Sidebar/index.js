import './index.scss'
import { Link, NavLink } from 'react-router-dom'

import LogoSubtitle from '../../assets/images/new-sub-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    // faYoutube,
    // faSkype,
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar = ()=> (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            
            <img className='sub-logo' src={LogoSubtitle} alt='ashish'/>
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" className='home-link' to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>
        <ul>
            <li>
                <a  href="https://www.linkedin.com/in/ashish-sankritya-24485a159/"
            target="_blank"
            rel="noreferrer">
             <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a   href="https://github.com/Ashish-Sankritya"
            target="_blank"
            rel="noreferrer">
             <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar