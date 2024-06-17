import React from 'react'
import "./trekking.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Trekking = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltb7e7a2e1c36a926e/63c98d8c1920d33622461160/nepal_lukla_rope-bridge-to-base-camp.jpg?width=1080&quality=75&format=pjpg&auto=webp"
    },

    {
      src: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt57684ef17981cdb2/63c98d9c3bec270435520cf7/Intrepid_Travel-Nepal_HNXE_Everest_IMG_8117.jpg?width=1080&quality=75&format=pjpg&auto=webp"
    },

    {
      src: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blta759919103336608/63c98d863d70c442da6b5d9e/nepal-everest-base-camp-day-09-gorakshep-1133.jpg?width=1080&quality=75&format=pjpg&auto=webp"
    },

    {
      src: "https://media.gadventures.com/media-server/cache/4d/07/4d0772ffb7cfbf12c6079ddf8037bbdc.jpg"
    },

    {
      src: "https://media.gadventures.com/media-server/cache/4d/07/4d0772ffb7cfbf12c6079ddf8037bbdc.jpg"
    },

    {
      src: "https://media.gadventures.com/media-server/cache/4d/07/4d0772ffb7cfbf12c6079ddf8037bbdc.jpg"
    },

  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="trekkingContainer">
      {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="trekkingWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="trekkingTitle">Everest Base Camp Trek</h1>
          <div className="trekkingAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Everest Region</span>
          </div>
          <span className="trekkingDistance">
            15 days, 85 Km
          </span>
          <span className="trekkingPriceHighlight">
            Book the world's most famous trekking
          </span>
          <div className="trekkingImages">
            {photos.map((photo, i) => (
              <div className="trekkingImgWrapper" key={i}>
                <img 
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="trekkingImg"
                />
              </div>
            ))}
          </div>
          <div className="trekkingDetails">
              <div className="trekkingDetailsTexts">
                <h1 className='trekkingTitle'>Trek the world's most famous trek</h1>
                <p className='trekkingDesc'>
                Everest is more than a mountain and the journey to its base camp is more than just a trek. Along a route dubbed by some as "the steps to heaven," every bend in the trail provides another photo opportunity — beautiful forests, Sherpa villages, glacial moraines, and foothills. For active adventurers not afraid to break a sweat, our full trekking support staff will bring you close to local cultures before opening a window to the top of the world.
                </p>
              </div>
              <div className="trekkingDetailsPrice">
                <h1>Perfect for trek junkies</h1>
                <span>
                  Located in Everest region, this is world's premier trekking destination.
                </span>
                <h2>
                  <b>$1200</b> (14 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trekking;
