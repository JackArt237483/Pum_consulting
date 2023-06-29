import classes from "./whyChooseCyprus.module.css"
import logoOne from "../../assets/WhyChooseCuprus/why_choose_cyprus_icon_boxes_slide1_icon.svg"
import logoTwo from "../../assets/WhyChooseCuprus/Icon Button.svg"
import logoThree from "../../assets/WhyChooseCuprus/why_choose_cyprus_icon_boxes_slide3_icon.svg"
import logoFour from "../../assets/WhyChooseCuprus/why_choose_cyprus_icon_boxes_slide4_icon.svg"

function WhyChooseCuprus():JSX.Element{

const logo = [
  {
    "image": logoOne,
    "name": "Progressive tax system",
    "titile": "Offering one of the most attractive tax regimes in Europe"
  },
  {
    "image":logoTwo,
    "name": "Stunning weather and climate",
    "titile": "Enjoy a high quality of life with over 324 days of sun annually"
  },
  {
    "image": logoThree,
    "name": "Blooming expat community",
    "titile": "Become part of an increasingly diverse community"
  },
  {
    "image": logoFour,
    "name": "Family-oriented values",
    "titile": "Excellent education standards and extremely low crime rates"
  },
]

  return (
    <div className={classes.cuprus_choose}>
      <div className={classes.cuprus_mini_block}>
        <div className={classes.cuprus_choose_text}>
             <h3>Why Choose Cyprus? </h3>
             <p>When you’re searching for the ideal home you want everything to be perfect. This is why over the years more and more people from all around the world are choosing Cyprus as their ultimate destination. This smal Mediterranean mesmerizes millions of visitors every year.</p>
       </div>
       <div className={classes.cuprus_choose_block_with_info}>
        {logo.map((item,index) => (
           <div key={index} className={classes.logo_info_one}>
           <img src={item.image} alt="block_one" />
           <b>{item.name}</b>
           <p>{item.titile}</p>
        </div>))}
       </div>
      </div>
    </div>
  )
}

export default WhyChooseCuprus