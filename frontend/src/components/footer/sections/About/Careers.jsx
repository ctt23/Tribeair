
import Footer from "../../Footer";
import "../sections.css";
import Navbar from "../../../navbar/Navbar";

const Careers = () => {
    return (
        <div className="sectionPage">
             <Navbar />
            <div className="sectionContainer">
               
                <h2>Careers</h2>
                <p>
                    At Tribeair, we believe in creating experiences that connect people with nature, culture, and adventure. Joining our team means becoming part of a global movement to redefine travel through guided trekking holidays and sustainable practices. Whether you're crafting unforgettable journeys behind the scenes or leading explorers on trails around the world, every role at Tribeair contributes to a shared vision of exploration and conservation.
                </p>
                <p>
                    We’re looking for passionate individuals who thrive on innovation, teamwork, and purpose. From adventure consultants to sustainability advocates, our team is united by a love for travel and a commitment to preserving the environments we operate in. Together, we aim to inspire, protect, and empower—building a platform that celebrates the beauty of the world while giving back to it.
                </p>
                <p>
                    Explore opportunities with Tribeair and turn your passion into a career that makes a difference. Let’s create adventures that matter.
                </p>   
            </div>
            <Footer /> 
        </div>
    );
};

export default Careers;