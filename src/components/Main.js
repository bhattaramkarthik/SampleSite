import { useEffect } from "react";
import MainPhoto from "../assets/Main_edited.jpg";
import BenifitImage from "../assets/benefit_edited.jpg";

import '../styles/Main.css';

function Main({ setAboutActiveLink, setContactActiveLink, setServiceActiveLink, setGalleryActiveLink }) {

    useEffect(() => {
        setAboutActiveLink(true);
        setContactActiveLink(false);
        setServiceActiveLink(false);
        setGalleryActiveLink(false);
    });

    return (
        <section className="mainSection">
            <div className="contentSection">
                <div>
                    <img className="mainImageClass" src={MainPhoto} alt="picture1" width="500px" height="440px" />
                </div>
                <div>
                    <p className="mainParaSection">The main goal of a physiotherapy clinic is to assess, diagnose, and treat a wide range of conditions that affect a person's physical abilities.
                        These conditions can range from musculoskeletal injuries, such as sprains and strains, to neurological conditions, such as stroke or Parkinson's disease. The clinic's team of trained
                        and licensed physiotherapists work closely with each patient to create personalized treatment plans that address their specific needs and goals.
                    </p>
                    <p className="mainParaSection">
                        The first step in any physiotherapy treatment is a thorough assessment.
                        During this initial evaluation, the physiotherapist will review the patient's medical history, perform a physical examination, and assess their current level of function and mobility. This information helps the physiotherapist to identify the underlying cause of the patient's
                        condition and develop an appropriate treatment plan.
                    </p>
                    <p className="mainParaSection">
                        Once the assessment is complete, the physiotherapist will work with the patient to set realistic goals and develop a treatment plan to achieve them. This plan may include a combination of exercises, manual therapy, and other techniques
                        to help improve the patient's strength, flexibility, and balance. The physiotherapist will also educate the patient on how to manage their condition and prevent future injuries.
                    </p>
                </div>
            </div>

            <div className="contentSection benifitSection">
                <div>
                    <img className="benifitImageMin" src={BenifitImage} alt="picture3" />
                    <p className="benefitsSection">
                        One of the greatest benefits of visiting a physiotherapy clinic is the one-on-one attention and care that patients receive.
                        The physiotherapist works closely with the patient, monitoring their progress and adjusting their treatment plan as needed. This personalized approach allows for a more efficient and effective recovery process.
                    </p>
                    <p className="benefitsSection">
                        Physiotherapy clinics also provide a supportive and motivating environment for patients to work towards their goals.
                        The clinic's team of professionals, including physiotherapists, support staff, and other healthcare providers, are dedicated to helping patients reach their full potential. They provide encouragement, guidance, and education to empower patients to take an active role in their recovery.
                    </p>
                    <p className="benefitsSection">
                        Physiotherapy clinics also provide a supportive and motivating environment for patients to work towards their goals. The clinic's team of professionals,
                        including physiotherapists, support staff, and other healthcare providers, are dedicated to helping patients reach their full potential. They provide encouragement, guidance, and education to empower patients to take an active role in their recovery.
                    </p>
                </div>
                <div className="benifitImageSection">
                    <img className="benifitImageClass" src={BenifitImage} alt="picture2" />
                </div>
            </div>
        </section>
    )
}


export default Main;