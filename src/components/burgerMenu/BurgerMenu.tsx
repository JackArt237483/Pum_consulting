import classes from "./burgerMenu.module.css"

interface BurgerMenuProps {
  modalBurgerOpen: () => void;
}

function BurgerMenu(props: BurgerMenuProps): JSX.Element {
  const { modalBurgerOpen } = props;


  return (
  <div className={classes.burger_location}>
    <div onClick={modalBurgerOpen} className={classes.burder_menu}>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Invest in cyprus</li>
        <li>Contuct us</li>
      </ul>
    </div>
  </div>
  );
}

export default BurgerMenu;
