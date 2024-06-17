import "./featured.css" 


const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="Everest.JPG"
          alt="Everest Trekking"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Everest</h1>
          <h2>10 treks</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="Annapurna.jpg"
          alt="Annapurna Trekking"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Annapurna</h1>
          <h2>8 treks</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.journeyera.com/wp-content/uploads/2022/01/makalu-base-camp-trek-06381-735x490.jpg"
          alt="Makalu Trekking"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Makalu</h1>
          <h2>9 treks</h2>
        </div>
      </div>      
    </div>
  )
}
export default Featured