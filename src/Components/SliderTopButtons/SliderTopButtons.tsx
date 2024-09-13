import AliceCarousel from "react-alice-carousel";
import TopButtons from "./TopButtons/TopButtons";

const SliderTopButtons = () => {
  return (
    <AliceCarousel
      mouseTracking
      disableDotsControls
      disableButtonsControls={true}
      responsive={{ 0: { items: 2 }, 768: { items: 4 } }}
    >
      <TopButtons />
      <TopButtons />
      <TopButtons />
      <TopButtons />
    </AliceCarousel>
  );
};

export default SliderTopButtons;
