import classes from "./contacts.module.css"
import phone from "../../assets/contacts/phone.svg"
import message from "../../assets/contacts/massage.svg"

function Contacts():JSX.Element {
  return (
    <div className={classes.contacts}>
      <div className={classes.block_contacts}>
        <div className={classes.block_info_contacts_text}>
          <h2>Contact Us</h2>
          <div></div>
        </div>
        <div className={classes.contancts_block_info}>
          <div className={classes.phone}>
            <img src={phone} alt="phone" />
            <b>+357 9056759</b>
          </div>
          <div className={classes.message}>
            <img src={message} alt="message" />
            <b>contact@pamrelocation.com</b>
          </div>
         <div className={classes.form}>
            <h3>send inquiry</h3>
            <div className={classes.block_form}>
              <form action="">
                <div className={classes.block_input_one}>
                  <input type="text" placeholder="Your name"/>
                  <input className={classes.one} type="text" placeholder="Email"/>
                </div>
                <div className={classes.block_input_two}>
                  <input type="text" placeholder="Subject"/>
                  <input className={classes.two} type="number" placeholder="Phone"/>
                </div>
                <div className={classes.block_input_big}>
                  <input type="text" placeholder="Your message"/>
                </div>
                <div className={classes.block_chex_box}>
                  <input type="checkbox"/>
                  <p>By clicking “Submit button” you accept our <span>Terms & Conditions</span> and have read our <span>Privacy Policy</span> and <span>Disclaimer</span></p>
                </div>
              </form>
              <button>Submit</button>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts