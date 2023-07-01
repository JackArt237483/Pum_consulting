// import Header from "../components/header/Header"
// import SliderInfo from "../components/slider_info/SliderInfo"
import AboutUs from "../components/aboutUs/AboutUs"
import Contacts from "../components/contacts/Contacts"
import HowWeMakeItHappen from "../components/howwemakeithappen/HowWeMakeItHappen"
import Map from "../components/map/Map"
import MovingToParadise from "../components/movingtoparadise/MovingToParadise"
import OurServies from "../components/our_servies/OurServies"
import OurParnters from "../components/ourpartners/OurParnters"
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
      <Contacts/>
      <OurParnters/>
    </div>
  )
}

export default Home