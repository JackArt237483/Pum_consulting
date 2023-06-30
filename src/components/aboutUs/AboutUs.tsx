import classes from "./aboutUs.module.css"
import founder from "../../assets/map/Rectangle 338.png"

function AboutUs():JSX.Element {
  return (
    <div className={classes.aboutUs}>
      <div className={classes.aboutUs_second_block}>
      <div className={classes.aboutUs_one_block}>
          <h3>Who We Are</h3>
          <div></div>
          <p>PAM Consulting is built upon a team of motivated professionals aiming to provide families and businesses the services they need to relocate to the island of Cyprus. 
          <span>We understand the challenges of deciding to relocate and this is why we prioritize our clients’ needs by making sure that the whole relocation process is as smooth and simple
          as possible.</span></p>
          <button>More about us</button>
      </div>
      <div className={classes.aboutUs_founder}>
        <div className={classes.block_founder}>
          <img src={founder} alt="founder"/>
          <div className={classes.block_founder_text}>
             <h6>FOUNDER</h6>
             <p>Anastasia Papaharidemou</p>
             <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs