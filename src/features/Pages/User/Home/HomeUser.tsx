import CarouselNews from "@/Components/Carousel/Carousel";
import SliderTopButtons from "@/Components/SliderTopButtons/SliderTopButtons";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";

const HomeUser = () => {
  return (
    <PageContentDist>
      <PageContentDist.Header>
        <SliderTopButtons />
      </PageContentDist.Header>
      <PageContentDist.Main>
        <CarouselNews />
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default HomeUser;
