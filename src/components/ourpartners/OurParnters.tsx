import classes from "./ourpartners.module.css"
import partner1 from "../../assets/partners/partner1.svg"
import partner2 from "../../assets/partners/partner2.png"
import partner3 from "../../assets/partners/partner3.png"
import partner4 from "../../assets/partners/partner4.png"
import partner5 from "../../assets/partners/partner5.png"
import partner6 from "../../assets/partners/partner6.png"


function OurParnters(): JSX.Element {
  return (
    <div className={classes.our_parnters}>
      <div className={classes.our_parnters_block}>
         <div className={classes.our_partners_text}>
           <h2>Our Partners</h2>
         </div>
        <div className={classes.our_img}>
          <div className={classes.our_parnters_img}>
              <img src={partner1} alt="one" />
              <img src={partner2} alt="two" />
              <img src={partner3} alt="three" />
              <img src={partner4} alt="four" />
              <img src={partner5} alt="five" />
              <img src={partner6} alt="six" />
          </div>
         </div>
      </div>
    </div>
  )
}

export default OurParnters