
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img
            src="Everest 2.JPG"
            alt=""
            className="siImg"
        /> 
        <div className="siDesc">
            <h1 className="siTitle">Everest Base Camp  Trek</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Difficulty type - Strenuous
            </span>
            <span className="siFeatures">
                Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>  
        
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div> 
            <div className="siDetailTexts">
                <span className="siPrice">$112</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div> 
        </div>
    </div>
  )
}

export default SearchItem;
