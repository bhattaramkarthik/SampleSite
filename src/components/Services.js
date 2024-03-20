import '../styles/Services.css';
import ServiceImage from '../assets/services_image.jpg';
import { useEffect } from 'react';

function Services({setAboutActiveLink, setContactActiveLink, setServiceActiveLink, setGalleryActiveLink}) {

    useEffect(() => {
        setAboutActiveLink(false);
        setContactActiveLink(false);
        setServiceActiveLink(true);
        setGalleryActiveLink(false);
    });

    return (
        <section className="servicePage">
            <div className='serviceContainer'>
                <div className="serviceSection">
                    <p>
                        Our clinic offers services to complement the treatment plan.
                        These may include massage therapy, acupuncture, and hydrotherapy. These additional services can help to enhance the patient's recovery and provide a more holistic approach to their treatment.
                    </p>
                    <p>
                        physiotherapy clinics are essential healthcare facilities that provide a range of services to help individuals recover from injuries, illnesses, or disabilities.
                        The personalized approach, diverse treatment options, and supportive environment make these clinics an ideal choice for anyone looking to improve their physical abilities and quality of life. By working closely with a dedicated team of professionals, patients can overcome their limitations and achieve their goals.
                    </p>
                </div>
                <div className='serviceImageSection'>
                    <img src={ServiceImage} alt="picture1" className='serviceImageClass' width="500px" height="440px" />
                </div>
            </div>
            <div className='servicesOfferContainer'>
                <p className='servicesText'>Services Offered</p>
                <div className='servicesClass'>
                    <div className='services1'>
                        <ul className='ul1'>
                            <li>Assessment and Diagnosis</li>
                            <li>Pain Management</li>
                            <li>Rehabilitation</li>
                            <li>Mobility and Balance Training</li>
                            <li>Chronic Pain Management</li>
                        </ul>
                    </div>
                    <div className='services2'>
                        <ul className='ul1'>
                            <li>Posture Correction</li>
                            <li>Education and Prevention</li>
                            <li>Pediatric physiotherapy</li>
                            <li>Geriatric physiotherapy</li>
                            <li>Sports physiotherapy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;