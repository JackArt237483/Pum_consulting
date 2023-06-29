import classes from "./map.module.css"
import map from "../../assets/map/map_image.png"

function Map():JSX.Element {
  return (
    <div className={classes.map_compoenets}>
      <div className={classes.map_card_block}>
       <div className={classes.map_text}>
         <h4>FIND THE IDEAL LOCATION TO CALL HOME</h4>
         <p>Click your mouse over any city to learn more about it</p>
       </div>
         <div className={classes.map_image}>
           <img src={map} alt="card" />
         </div>
       </div>
    </div>
  )
}

export default Map