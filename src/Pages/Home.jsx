import LatestProperties from "../Components/LatestProperties"
import SearchProperty from "../Components/SearchProperty"
import SliderComponent from "../Components/SliderComponent"

const Home = () => {
  return (
    <div className="home">
        <SliderComponent/>
        <SearchProperty/>
        <LatestProperties/>
    </div>
  )
}

export default Home