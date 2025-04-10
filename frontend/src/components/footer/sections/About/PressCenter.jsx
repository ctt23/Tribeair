
import Footer from "../../Footer";
import "../sections.css";
import Navbar from "../../../navbar/Navbar";

const PressCenter = () => {
    return (
        <div className="sectionPage">
             <Navbar />
            <div className="sectionContainer">
               
                <h2>Press Center</h2>
                <p>
                Welcome to the Tribeair Press Center, your gateway to the latest news, updates, and stories about our mission to connect adventurers with unforgettable trekking experiences while preserving the natural world. Here, journalists, media professionals, and partners can access everything they need to share our story.
                </p>
                
            </div>
            <Footer /> 
        </div>
    );
};

export default PressCenter;