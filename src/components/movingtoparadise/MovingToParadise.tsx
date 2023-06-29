import classes from './movingtoparadise.module.css'
import blackOne from '../../assets/movingtoparadise/image_villa.png'
import blackTwo from '../../assets/movingtoparadise/image_villas.png'

function MovingToParadise():JSX.Element {
  return (
    <div className={classes.movingtoparadise}>
       <div className={classes.moving_info}>
          <div className={classes.moving_info_first_block}>
            <img src={blackOne} alt="img" />
            <div></div>
          </div>
          <div className={classes.moving_info_text}>
             <div className={classes.moving_info_text_block}>
              <h2>Moving to Paradise</h2>
              <p>Have you ever dreamed about the perfect place to live? Your definition of perfect may be different someone else’s. Are you longing to live by the beach and listen to the soothing waves or are you a kind of person who enjoys the bustling sounds of the city? Whatever lifestyle you desire, Cyprus has it all! Whether you’re travelling with your family, your partner, or as a solo business entrepreneur, this exotic island can offer you a little bit of everything. 
              <span>If youve made the decision to relocate to Cyprus, then you are expecting to find a safe place to settle. With extremely low crime rate, stunning sandy beaches, and awe-inspiring mountain views, Cyprus is the place to be!
            </span></p>
              <button>Find Out More</button>
             </div>
          </div>
          <div className={classes.moving_info_second_block}>
            <div></div>
            <img src={blackTwo} alt="img" />
          </div>
       </div>
    </div>
  )
}

export default MovingToParadise