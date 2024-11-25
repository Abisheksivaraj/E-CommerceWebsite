import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mens from "../../../assets/HomeCarousal/menswear.jpg";
import womens from "../../../assets/HomeCarousal/womens.jpg";
import shoe from "../../../assets/HomeCarousal/shoe.jpg";
import gadgets from "../../../assets/HomeCarousal/gadjets.png";



const items = [
  <div className="item mt-8" data-value="1">
    <img
      src={mens}
      alt="Menswear"
      className="h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[31rem] w-full object-cover"
    />
  </div>,
  <div className="item" data-value="2">
    <img
      src={womens}
      alt="Womenswear"
      className="h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[31rem] w-full object-cover"
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src={shoe}
      alt="Shoes"
      className="h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[31rem] w-full object-cover"
    />
  </div>,
  <div className="item" data-value="4">
    <img
      src={gadgets}
      alt="Gadgets"
      className="h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[31rem] w-full object-cover"
    />
  </div>,
];

const HomePageCarousel = () => (
  <div className="relative px-4 lg:px-8">
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={2000}
      infinite
      
      disableButtonsControls
    />
  </div>
);

export default HomePageCarousel;
