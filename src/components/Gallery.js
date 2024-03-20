import { useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import '../styles/Gallery.css';

function Gallery({ setAboutActiveLink, setContactActiveLink, setServiceActiveLink, setGalleryActiveLink }){
    
    useEffect(() => {
        setAboutActiveLink(false);
        setContactActiveLink(false);
        setServiceActiveLink(false);
        setGalleryActiveLink(true);
    });

    const images = [
        {
          original: require('../assets/whatsapp-edited.png'),
        },
        {
          original: require('../assets/facebook-edited.png'),
        },
        {
          original: require('../assets/instagram-edited.png'),
        },
      ];

    return(
        <section>
            <ReactImageGallery items={images} infinite={false} showPlayButton={false} showFullscreenButton={false}/>
        </section>
    )
}

export default Gallery;