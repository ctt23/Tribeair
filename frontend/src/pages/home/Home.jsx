import "./home.css" 
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import TrekkingList from "../../components/trekkingList/TrekkingList"
import FeaturedTreks from "../../components/featuredTreks/FeaturedTreks"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Explore by Regions</h1>
        <Featured />
        <h1 className="homeTitle">Explore by difficulty type</h1>
        <TrekkingList /> 
        <h1 className="homeTitle">Trending treks</h1>
        <FeaturedTreks />
        <Footer />
      </div>
    </div>
  )
}

export default Home
