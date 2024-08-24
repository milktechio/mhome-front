import CarouselItem from "./CarouselItem/CarouselItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselNews = () => {
  return (
    <AliceCarousel
      infinite
      disableDotsControls
      disableButtonsControls={true}
      mouseTracking
      autoPlay={true}
      autoPlayInterval={2000}
    >
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </AliceCarousel>
  );
};

export default CarouselNews;
