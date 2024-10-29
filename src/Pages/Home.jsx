import AboutUsComponent from "../Components/AboutUsComponent";
import FeaturedProjects from "../Components/FeaturedProjects";
import FeaturedSlideshow from "../Components/FeaturedSlideshow";
import LatestProperties from "../Components/LatestProperties";
import SearchProperty from "../Components/SearchProperty";
import SliderComponent from "../Components/SliderComponent";
import TeamComponent from "../Components/TeamComponent";

const Home = () => {
  return (
    <div className="home">
      <SliderComponent />
      <LatestProperties />
      <SearchProperty />
      <AboutUsComponent/>
      <FeaturedProjects />
      <FeaturedSlideshow />
      <TeamComponent/>
    </div>
  );
};

export default Home;
