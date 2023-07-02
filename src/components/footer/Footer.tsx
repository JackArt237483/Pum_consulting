import classes from "./footer.module.css"

function Footer(): JSX.Element {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_block}>
      <div className={classes.text_footer}>
        <ul>
          <li>© 2022 PAM Consulting. All rights reserved</li>
          <li>Disclaimer</li>
          <li>Privacy poilcy</li>
        </ul>
      </div>
      <div className={classes.text}>
        <p>Who designed this website?</p>
      </div>
      </div>
    </div>
  )
}

export default Footer