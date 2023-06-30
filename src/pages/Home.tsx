// import Header from "../components/header/Header"
// import SliderInfo from "../components/slider_info/SliderInfo"
import AboutUs from "../components/aboutUs/AboutUs"
import HowWeMakeItHappen from "../components/howwemakeithappen/HowWeMakeItHappen"
import Map from "../components/map/Map"
import MovingToParadise from "../components/movingtoparadise/MovingToParadise"
import OurServies from "../components/our_servies/OurServies"
import WhyChooseCuprus from "../components/why_choose_cyprus/WhyChooseCuprus"


function Home(): JSX.Element {
  return (
    <div>
      {/* <Header/>
      <SliderInfo/> */}
      <OurServies/>
      <MovingToParadise/>
      <WhyChooseCuprus/>
      <Map/>
      <AboutUs/>
      <HowWeMakeItHappen/>
    </div>
  )
}

export default Home