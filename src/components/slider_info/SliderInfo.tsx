import classes from './sliderInfo.module.css'
import '../../styles/Slider/slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectFade } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/bundle'
import sliderOne from "../../assets/backSlideImage/slider_back_one.png"
import sliderTwo from "../../assets/backSlideImage/slider_back_two.png"
import sliderthree from "../../assets/backSlideImage/slider_back_three.png"
import sliderFour from "../../assets/backSlideImage/slider_back_four.png"
import sliderFive from "../../assets/backSlideImage/slider_back_five.png"
import sliderSix from "../../assets/backSlideImage/slider_back_six.png"

const dataSlider = [
  {
    "image": sliderOne,
    "name": "Relocating to Cyprus Seamless – Exceptional – Experience ",
    "title": "The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need to thrive."
  },
  {
    "image": sliderTwo,
    "name": "Invest in property in Cyprus",
    "title": "Real estate has become a flourishing type of investment on the island, with an increasing number of people seeking to invest in residential and commercial property projects in Cyprus. With a confident and stable economic outlook, it is a great time to consider investing in Cyprus property. "
  },
  {
    "image": sliderthree,
    "name": "Family Relocation ",
    "title": "Globally known as one of the safest places to live in the world, Cyprus is the ideal location for families. The healthy lifestyle and family-friendly communities have much to offer to every member of your family."
  },
  {
    "image": sliderFour,
    "name": "Business Relocation",
    "title": "Cyprus has a lot to offer for business entrepreneurs who aim to reach for more and expand their business goals. The attractive tax benefits and office locations have transformed Cyprus into a country with endless business opportunities for everyone."
  },
  {
    "image": sliderFive,
    "name": "Investing in Yachts",
    "title": "Living on an island is an adventure that opens up a wide range of experiences and possibilities. Here, you can conquer the Mediterranean Sea by renting or owning a yacht as part of your investment plan."
  },
  {
    "image": sliderSix,
    "name": "Moving to Cyprus",
    "title": "Thousands of individuals and families from every part of the globe have immigrated to Cyprus after discovering their perfect place to call home. The island is now one of the most dominant destinations with huge expat communities."
  }
]

function SliderInfo(): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <Swiper
          modules={[Pagination, EffectFade]}
          slidesPerView={"auto"}
          effect={"fade"}
          pagination={{
            clickable: true,
            el: ".swiper-pagination"
          }}
        >
          {dataSlider.map((item,index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: '740px'
                }}
                className={classes.slider_back_one}
              >
                <div className={classes.slider_back_button}>
                  <button>investments</button>
                  <button>business relocation</button>
                  <button>family relocation</button>
                </div>
                <div className={classes.slider_text}>
                  <h1>{item.name}</h1>
                  <p>{item.title}</p>
                  <button>Find Out More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default SliderInfo;