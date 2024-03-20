
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RouteElement from './components/RouteElement';
import { useState } from 'react';

function App() {
  const [aboutActiveLink, setAboutActiveLink] = useState(false);
  const [contactActiveLink, setContactActiveLink] = useState(false);
  const [serviceActiveLink, setServiceActiveLink] = useState(false);
  const [galleryActiveLink, setGalleryActiveLink] = useState(false);


  return (
    <>
      <Header aboutActiveLink={aboutActiveLink}
        contactActiveLink={contactActiveLink}
        serviceActiveLink={serviceActiveLink} 
        galleryActiveLink={galleryActiveLink} 
        setAboutActiveLink={setAboutActiveLink}
        setContactActiveLink={setContactActiveLink}
        setServiceActiveLink={setServiceActiveLink} 
        setGalleryActiveLink={setGalleryActiveLink}
      />
      <RouteElement
        setAboutActiveLink={setAboutActiveLink}
        setContactActiveLink={setContactActiveLink}
        setServiceActiveLink={setServiceActiveLink} 
        setGalleryActiveLink={setGalleryActiveLink}
      />
      <Footer />
    </>
  );
}

export default App;
