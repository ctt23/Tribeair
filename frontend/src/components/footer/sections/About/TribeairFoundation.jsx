
import Footer from "../../Footer";
import "../sections.css";
import Navbar from "../../../navbar/Navbar";

const TribeairFoundation = () => {
    return (
        <div className="sectionPage">
            <Navbar />
            <div className="sectionContainer">             
                <h2>Tribeair Foundation</h2>
                <p>
                The Tribeair Foundation was established to protect and restore the natural world that inspires our adventures. Dedicated to preserving megafauna and increasing jungle cover in the countries we operate in, the foundation works hand-in-hand with local communities, conservationists, and environmental organizations to create lasting impact.
                </p>
                <p>
                Through sustainable initiatives, reforestation projects, and wildlife protection programs, the Tribeair Foundation strives to ensure that future generations can experience the beauty of untouched nature. By supporting guided trekking holidays, we aim to give back to the ecosystems that make these journeys possible, fostering harmony between exploration and conservation.
                </p>   
            </div>
            <Footer /> 
        </div>
    );
};

export default TribeairFoundation;