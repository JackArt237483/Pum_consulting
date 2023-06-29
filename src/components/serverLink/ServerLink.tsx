import classes from "./serverLink.module.css"

interface ServerMenuProps {
  modalBurgerOpen: () => void;
}

function ServerLink(props: ServerMenuProps): JSX.Element  {

  const { modalBurgerOpen } = props;

  return (
    <div onClick={modalBurgerOpen} className={classes.server_link}>
        <ul>
          <li>Investments opportunities</li>
          <li>Business relocation</li>
          <li>Family relocation</li>
        </ul>
    </div>
  )
}

export default ServerLink