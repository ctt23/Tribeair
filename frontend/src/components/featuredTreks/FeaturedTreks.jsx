import "./featuredTreks.css"

const FeaturedTreks = () => {
  return (
    <div className="ft">
        <div className="ftItem">
            <img src="./Everest 4.jpg" alt="" className="ftImg"/>
            <span className="ftName">Everest Base Camp Trek</span>
            <span className="ftRegion">Everest region</span>   
            <span className="ftPrice">Starting from $200</span> 
            <div className="ftRating">
                <button>8.9</button> 
                <span>Excellent</span>
            </div>
        </div>
        <div className="ftItem">
            <img src="./Annapurna 1.jpg" alt="" className="ftImg"/>
            <span className="ftName">Annapurna Circuit Trek</span>
            <span className="ftRegion">Annapurna region</span>   
            <span className="ftPrice">Starting from $200</span> 
            <div className="ftRating">
                <button>9.1</button> 
                <span>Excellent</span>
            </div>
        </div>
        <div className="ftItem">
            <img src="https://cdn.kimkim.com/files/a/images/8b941bf4df76cf0a18928e9cfd058dc51f368a30/big-930ba35ecb920495bde8b79dc4feabb8.jpg" alt="" className="ftImg"/>
            <span className="ftName">Langtang Valley Trek</span>
            <span className="ftRegion">Langtang region</span>   
            <span className="ftPrice">Starting from $200</span> 
            <div className="ftRating">
                <button>9.1</button> 
                <span>Excellent</span>
            </div>
        </div>
        <div className="ftItem">
            <img src="https://himalayan-masters.com/wp-content/uploads/2022/09/manaslu-circuit-olly-1_11zon-2-1-1127x450.jpg" alt="" className="ftImg"/>
            <span className="ftName">Manaslu Circuit Trek</span>
            <span className="ftRegion">Manaslu region</span>   
            <span className="ftPrice">Starting from $200</span> 
            <div className="ftRating">
                <button>8.9</button> 
                <span>Excellent</span>
            </div>
        </div>
        <div className="ftItem">
            <img src="https://www.frolicadventure.com/uploads/img/gokyo-lakes-trek.jpg" alt="" className="ftImg"/>
            <span className="ftName">Gokyo Lake Trek</span>
            <span className="ftRegion">Everest region</span>   
            <span className="ftPrice">Starting from $200</span> 
            <div className="ftRating">
                <button>9.1</button> 
                <span>Excellent</span>
            </div>
        </div>
     </div> 

  )
}

export default FeaturedTreks
