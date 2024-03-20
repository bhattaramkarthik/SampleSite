import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Gallery";


function RouteElement({ setAboutActiveLink, setContactActiveLink, setServiceActiveLink, setGalleryActiveLink }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main setAboutActiveLink={setAboutActiveLink}
          setContactActiveLink={setContactActiveLink} setGalleryActiveLink={setGalleryActiveLink} 
          setServiceActiveLink={setServiceActiveLink} />}></Route>
        <Route path="/contact" element={<Contact setAboutActiveLink={setAboutActiveLink}
          setContactActiveLink={setContactActiveLink} setGalleryActiveLink={setGalleryActiveLink} 
          setServiceActiveLink={setServiceActiveLink} />}></Route>
        <Route path="/services" element={<Services setAboutActiveLink={setAboutActiveLink}
          setContactActiveLink={setContactActiveLink} setGalleryActiveLink={setGalleryActiveLink} 
          setServiceActiveLink={setServiceActiveLink} />}></Route>
          <Route path="/gallery" element={<Gallery setAboutActiveLink={setAboutActiveLink}
          setContactActiveLink={setContactActiveLink} setGalleryActiveLink={setGalleryActiveLink} 
          setServiceActiveLink={setServiceActiveLink} />}></Route>
      </Routes>
    </>
  )
}

export default RouteElement;