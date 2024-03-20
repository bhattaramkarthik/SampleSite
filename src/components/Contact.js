import { useEffect } from "react";
import '../styles/Contact.css';
import Review from "./Review";

function Contact({setAboutActiveLink, setContactActiveLink, setServiceActiveLink, setGalleryActiveLink}){

    useEffect(() => {
        setAboutActiveLink(false);
        setContactActiveLink(true);
        setServiceActiveLink(false);
        setGalleryActiveLink(false);
    });

    return(
        <>
        <section className="contactSection">
           <div className='contactClass'>
              <p className="contactHeading">CONTACT US</p>
              <p>We are here to provide services at</p>
              <p className="emptyPara"></p>
              <p>Location : Address 1234566</p>
              <p>Phone : +91 7897897897</p>
              <p>Mail : test@gmail.com</p>
           </div>
           <div className="imageSection">
           <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.394805602785!2d79.98743137462742!3d14.462004580455812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cb9341f2205%3A0x74eab7338345738b!2sNellore%20Railway%20Station!5e0!3m2!1sen!2sin!4v1710479751481!5m2!1sen!2sin" width="400" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </section>
        <Review/>
        </>
        
    )
}

export default Contact;