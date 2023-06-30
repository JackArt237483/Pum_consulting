import classes from "./howwemakeithappen.module.css"
import blockOne from "../../assets/HowWeMakeItHappen/BlockOne.svg"
import blockTwo from "../../assets/HowWeMakeItHappen/BlockTwo.png"
import blockThree from "../../assets/HowWeMakeItHappen/BlockThree.png"
import blockFour from "../../assets/HowWeMakeItHappen/BlockFour.png"

const blockData = [
  {
    image: blockOne,
    name: "We listen",
    title: "Our most prominent purpose is to understand and identify with your needs so we can effectively find ways to provide solutions."
  },
  {
    image: blockTwo,
    name: "We strategize",
    title: "According to your requirements, our team designs a thorough series of steps that will make the relocation process as smooth as possible."
  },
  {
    image: blockThree,
    name: "We provide",
    title: "We implement our services that are based on efficient strategic planning that respond to your family’s and business’s goals and ambitions."
  },
  {
    image: blockFour,
    name: "We manage",
    title: "Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services."
  },
]

function HowWeMakeItHappen():JSX.Element {
  return (
    <div className={classes.howwemakeithappen}>
      <div className={classes.howwemakeithappen_two_block}>
         <div className={classes.howwemakeithappen_info}> 
             <h2>how we make it happen</h2>
         </div>
         <div className={classes.howwemakeithappen_info_block}>
            {blockData.map((item,index) =>(
            <div key={index} className={classes.block_info}>
              <img src={item.image} alt="block" />
              <h6>{item.name}</h6>
              <p>{item.title}</p>
          </div>))}
         </div>
      </div>
    </div>
  )
}

export default HowWeMakeItHappen