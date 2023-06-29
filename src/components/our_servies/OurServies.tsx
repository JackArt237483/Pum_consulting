import classes from'./ourservies.module.css'
import cardOne from "../../assets/our_servies_img/services_cards_investment_schemes_image.png"
import cardTwo from "../../assets/our_servies_img/services_cards_family_relocation_image.png"
import cardThree from "../../assets/our_servies_img/services_cards_business_relocation_image.png"

function OurServies(): JSX.Element {
  return (
    <div className={classes.container}>
       <div className={classes.our_servies}>
          <div className={classes.our_servies_block}>
            <div className={classes.text_servies}>
               <h1>Our Services</h1>
               <div></div>
            </div>
            <div className={classes.our_servies_card}>
               <div className={classes.our_servies_card_info}>
                  <img src={cardOne} alt="card" />
                  <div className={classes.block_info_servies}>
                  <h3>Family Relocation</h3>
                  <p>With strategic planning, we simplify the moving process so you and your family can feel safe and confident.</p>
                  <button>Find Out More</button>
                  <div>
               </div>
              </div>
               </div>

               <div className={classes.our_servies_card_info}>
                  <img src={cardTwo} alt="card" />
                  <div className={classes.block_info_servies}>
                  <h3>Business Relocation</h3>
                  <p>We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.</p>
                  <button>Find Out More</button>
                  <div>
               </div>
              </div>
               </div>

               <div className={classes.our_servies_card_info}>
                  <img src={cardThree} alt="card" />
                  <div className={classes.block_info_servies}>
                  <h3>Investment plans</h3>
                  <p>Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.</p>
                  <button>Find Out More</button>
                  <div>
               </div>
              </div>
               </div>
            </div>
      </div>
    </div>
  </div>
  )
}

export default OurServies