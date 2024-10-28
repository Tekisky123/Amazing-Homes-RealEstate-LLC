import AboutUsComponent from "../Components/AboutUsComponent";
import FeaturedProjects from "../Components/FeaturedProjects";
import FeaturedSlideshow from "../Components/FeaturedSlideshow";
import LatestProperties from "../Components/LatestProperties";
import SearchProperty from "../Components/SearchProperty";
import SliderComponent from "../Components/SliderComponent";

const Home = () => {
  return (
    <div className="home">
      <SliderComponent />
      <LatestProperties />
      <SearchProperty />
      <FeaturedProjects />
      <AboutUsComponent/>
      <FeaturedSlideshow />
    </div>
  );
};

export default Home;
