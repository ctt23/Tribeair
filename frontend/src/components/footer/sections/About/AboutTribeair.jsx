
import Footer from "../../Footer";
import "../sections.css";
import Navbar from "../../../navbar/Navbar";


const AboutTribeair = () => {
    return (
        <div className="sectionPage">
             <Navbar />
            <div className="sectionContainer">
               
                <h2>About Tribeair</h2>
                <p>
                Founded in 2025, Tribeair is the culmination of a journey that began in 2016 with a profound connection to Nepal's breathtaking landscapes and vibrant culture. Inspired by the transformative power of exploration, Tribeair was envisioned as a platform where people could share and experience guided trekking holidays from around the world.

                At Tribeair, we believe that travel is more than just reaching destinations—it's about connecting with nature, immersing yourself in local cultures, and forging unforgettable memories. We aim to bring together adventurers and expert guides to create seamless, enriching trekking experiences that inspire and empower.

                Whether you're seeking the serene trails of the Himalayas or the rugged beauty of Patagonia, Tribeair is your gateway to curated trekking adventures designed for every wanderer. Join us as we explore the world, one step at a time.

                </p>
                <p>
               
                   <strong> Mission Statement: </strong> 

                    To connect adventurers with nature through sustainable tourism, while enhancing forest cover and megafauna populations, inspiring a world where exploration and conservation thrive together.".
                </p>
                <p>
                   <strong> Vision Statement: </strong> 

                    To become a global leader in sustainable adventure tourism, inspiring a movement that connects people with nature, fosters environmental stewardship, and empowers local communities to thrive alongside growing megafauna populations.  
                </p>   
            </div>
            <Footer /> 
        </div>
    );
};

export default AboutTribeair;