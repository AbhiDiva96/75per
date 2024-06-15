import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer>
        <div class="footer-container">
            <div class="footer-section logo-section">
                <div class="footer-buttons">
                    <button class="star-button"><Link to="https://github.com/AbhiDiva96/75per" style={{ textDecoration: 'none', color: 'white' }}>⭐Star us</Link></button>
                </div>
            </div>
            <div class="footer-section social-section">
                <div class="social-icons">
                    <a href="https://github.com/AbhiDiva96/75per"><GitHubIcon/></a>
                    <a href="https://www.linkedin.com/in/"><LinkedInIcon/></a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;