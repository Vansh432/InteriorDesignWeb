import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'
import Logo from '../Images/navbar/logo.png'
import './styles/Navbar.css'
function Navbar() {

    const socialStyle = {
        width: "30px",
        height: "30px",
        margin:"0 11px"
    }
    return <>
        <nav>
            <div id="logoImage">
                <img src={Logo} alt="loading..." />
            </div>
            <ul className='navigationMain'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/service">SERVICE</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/aboutus">ABOUT US</Link></li>
                <li><Link to="/contactus">CONTACT US</Link></li>
            </ul>
            <div>
                <ul className='flex p-5'>
                    <li>
                        <SocialIcon url="https://facebook.com" style={socialStyle} />
                    </li>
                    <li>

                        <SocialIcon url="https://instagram.com" style={socialStyle} />

                    </li>    <li>

                        <SocialIcon url="https://whatsapp.com" style={socialStyle} />

                    </li>
                </ul>
            </div>
        </nav>
    </>

}

export default Navbar;