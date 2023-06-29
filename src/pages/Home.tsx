// import Header from "../components/header/Header"
// import SliderInfo from "../components/slider_info/SliderInfo"

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
    </div>
  )
}

export default Home