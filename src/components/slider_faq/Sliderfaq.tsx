import classes from "./sliderfaq.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import 'swiper/css/bundle'
import dataSlider from "../../styles/dataSlider.json"
import "../../styles/Slider/sliderTwo.css"

function Sliderfaq(): JSX.Element {
  return (
    <div className={classes.sliderfaq}>
      <div className={classes.sliderBlock}>
        <div className={classes.slider_header_text}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Swiper
         modules={[Pagination]}
         slidesPerView={"auto"}
         loop={true}
         wrapperClass="my-wrapper-class"
         pagination={{
           clickable: true,
           el: ".my-swiper-pagination"
         }}>
          {dataSlider.map((item,id)=>( 
          <SwiperSlide key={id}>
            <div className={classes.block_sliders}>
              <div className={classes.back_img}>
                <button>{item.caterogy}</button>
              </div>
              <div className={classes.other_text}>
                <h4>{item.qestion}</h4>
                <p>{item.title}</p>
              </div>
            </div>
          </SwiperSlide>))}
        </Swiper>
        <div className="my-swiper-pagination"></div>
      </div>
    </div>
  )
}

export default Sliderfaq