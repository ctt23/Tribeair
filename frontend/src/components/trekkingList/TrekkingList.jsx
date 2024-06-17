import "./trekkingList.css"


const TrekkingList = () => {
  return (
    <div className="tList">
        <div className="tListItem">
            <img src="https://travelumpire.com/wp-content/uploads/2022/06/Ghorepani-Trek.jpg" alt="" className="tListImg"/>
            <div className="tListTitles">
                <h1>Easy</h1>
                <h2>15 treks</h2>    
            </div>    
        </div>
        <div className="tListItem">
            <img src="https://57hours.com/wp-content/uploads/2021/05/nepal-hikers-waterfall-1-888x592.jpg" alt="" className="tListImg"/>
            <div className="tListTitles">
                <h1>Moderate</h1>
                <h2>15 treks</h2>    
            </div>    
        </div>
        <div className="tListItem">
            <img src="https://overlandtreknepal.com/wp-content/uploads/2024/01/241c9191-89db-4467-80e5-fe26709b6104.jpg" alt="" className="tListImg"/>
            <div className="tListTitles">
                <h1>Strenuous</h1>
                <h2>15 treks</h2>    
            </div>    
        </div>
        <div className="tListItem">
            <img src="https://www.nepalhimalayastrekking.com/public/uploads/Kanchenjunga-Trek-Guide.jpg" alt="" className="tListImg"/>
            <div className="tListTitles">
                <h1>Challenging</h1>
                <h2>15 treks</h2>    
            </div>    
        </div>
    </div>
  )
}
export default TrekkingList