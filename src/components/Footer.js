import '../styles/Footer.css'

const facebook = require('../assets/facebook-edited.png');
const instagram = require('../assets/instagram-edited.png');
const twitter = require('../assets/twitter-edited.png');
const whatsapp = require('../assets/whatsapp-edited.png');


function Footer() {
    return (
        <footer className='footerSection'>
            <div>
                <div>Follow us at:</div>
                <div style={{ marginTop: '10px' }}>
                    <span>
                        <a href="http://www.facebook.com/" target='_blank' rel="noopener noreferrer">
                            <img src={facebook} alt='facebook logo' width="50px" height="50px" />
                        </a>
                    </span>
                    <span className="socialMediaSection">
                        <a href="http://www.instagram.com/" target='_blank' rel="noopener noreferrer">
                            <img src={instagram} width="50px" height="48px" alt='instagram logo' />
                        </a>
                    </span>
                    <span className="socialMediaSection">
                        <a href="http://www.twitter.com/" target='_blank' rel="noopener noreferrer">
                            <img src={twitter} width="50px" height="50px" alt='twitter logo' />
                        </a>
                    </span>
                    <span className="whatsAppMediaSection">
                        <a href="http://wa.me/8686568316" target='_blank' rel="noopener noreferrer">
                            <img src={whatsapp} width="50px" height="50px" alt='whatsapp logo' />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;