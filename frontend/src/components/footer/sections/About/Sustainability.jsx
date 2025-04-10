
import Footer from "../../Footer";
import "../sections.css";
import Navbar from "../../../navbar/Navbar";

const Sustainability = () => {
    return (
        <div className="sectionPage">
            <Navbar />
            <div className="sectionContainer">
                
                <h2>Sustainability</h2>
                <p> 
                    At Tribeair, sustainability is not just a goal—it's the heart of everything we do. We believe that the beauty of nature should be explored, cherished, and protected for generations to come. Every step we take is guided by the principle of leaving the world better than we found it.
                </p>
                <p>
                    Our platform promotes eco-friendly trekking experiences that prioritize low-impact travel, respect local cultures, and empower communities. From supporting reforestation efforts to partnering with guides who champion sustainable practices, Tribeair is committed to preserving the ecosystems that make our adventures extraordinary.
                </p>
                <p>
                    But sustainability goes beyond the trails. With every booking, a portion of proceeds goes directly to conservation projects, including protecting endangered megafauna and increasing jungle cover. Together with our travelers, we’re building a future where exploration and environmental stewardship go hand in hand—a future where adventure fuels preservation.    
                </p>   
            </div>
            <Footer /> 
        </div>
    );
};

export default Sustainability;