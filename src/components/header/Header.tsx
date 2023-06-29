import { useState, useEffect } from 'react';
import classes from './header.module.css';
import logoHeader from '../../assets/logo/logoHeader.svg';
import point from '../../assets/logo/point.svg'
import menu from '../../assets/logo/menu.svg';
import BurgerMenu from '../burgerMenu/BurgerMenu';

function Header(): JSX.Element {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openModal, setOpenModal] = useState(false);

  const modalBurgerOpen = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {screenWidth >= 1440 && (
        <div className={classes.container}>
          <div className={classes.header}>
            <div>
              <img src={logoHeader} alt="logoHeader" />
            </div>
            <div className={classes.link_header}>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services<span className={classes.point}><img src={point} alt="logo"/></span></li>
                <li>Invest in Cyprus</li>
                <li>Migration</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className={classes.header_button}>
              <button>Get in touch</button>
            </div>
          </div>
        </div>
      )}
      {screenWidth < 1440 && (
        <div className={classes.container}>
          <div className={classes.header_mobile}>
            <div>
              <img src={logoHeader} alt="logoHeader" />
            </div>
            <div className={classes.header_mobile_block}>
              <div className={classes.header_button}>
                <button>Get in touch</button>
              </div>
              <div>
                <img src={menu} alt="logo" onClick={modalBurgerOpen} />
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal && <BurgerMenu modalBurgerOpen={modalBurgerOpen} />}
    </div>
  );
}

export default Header;