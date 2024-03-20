import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { Sun, SunFill } from 'react-bootstrap-icons';
import { useState } from 'react';

function Header({ aboutActiveLink, contactActiveLink, serviceActiveLink,galleryActiveLink, setAboutActiveLink, setContactActiveLink, setServiceActiveLink, setGalleryActiveLink }) {

    const locationDetails = useLocation();

    const [mode, setMode] = useState(false);

    function handleDark(){
        document.body.classList.add('darkClass');
        setMode(true);
    }

    function handleLight(){
        document.body.classList.remove('darkClass');
        setMode(false);
    }

    return (
        <header className="headerSection">
            <div className="headerTitle">
                Company name
            </div>
            <div className="headerMenu">
                <NavLink to="/" className="navlinkClass" onClick={() => {
                    setAboutActiveLink(true);
                    setContactActiveLink(false);
                    setServiceActiveLink(false);
                    setGalleryActiveLink(false);
                }}><button className={(aboutActiveLink || locationDetails.pathname.length === 1) ? (mode ? 'darkActiveClass' : 'activeClass') : (mode ? 'darkNavlinkClass' : 'lightNavlinkClass')}>About</button></NavLink>
                <NavLink to="/contact" className="navlinkClass" onClick={() => {
                    setAboutActiveLink(false);
                    setContactActiveLink(true);
                    setServiceActiveLink(false);
                    setGalleryActiveLink(false);
                }}><button className={(contactActiveLink || locationDetails.pathname.match('/contact')) ? (mode ? 'darkActiveClass' : 'activeClass') : (mode ? 'darkNavlinkClass' : 'lightNavlinkClass')}>Contact</button></NavLink>
                <NavLink to="/services" className="navlinkClass" onClick={() => {
                    setAboutActiveLink(false);
                    setContactActiveLink(false);
                    setServiceActiveLink(true);
                    setGalleryActiveLink(false);
                }}><button className={(serviceActiveLink || locationDetails.pathname.match('/services')) ? (mode ? 'darkActiveClass' : 'activeClass') : (mode ? 'darkNavlinkClass' : 'lightNavlinkClass')}>Services</button></NavLink>
                <NavLink to="/gallery" className="navlinkClass" onClick={() => {
                    setAboutActiveLink(false);
                    setContactActiveLink(false);
                    setServiceActiveLink(false);
                    setGalleryActiveLink(true);
                }}><button className={(galleryActiveLink || locationDetails.pathname.match('/gallery')) ? (mode ? 'darkActiveClass' : 'activeClass') : (mode ? 'darkNavlinkClass' : 'lightNavlinkClass')}>Gallery</button></NavLink>
                <span className='modeClass'>
                    {mode ? <Sun onClick={handleLight} color='white'/> : <SunFill onClick={handleDark}/>}
                </span>
            </div>
        </header>
    )
}

export default Header;