import styles from "../styles/Navigation.module.css";
import { Heart, Cart } from "./Icons";

import SvgIcon from "./SvgIcon";
import { Spacer } from "@geist-ui/core";
import { useContext } from "react";
import { AppContext } from "../pages";

export default function Navigation() {
  const { faves, cart, cartView, setCartView } = useContext(AppContext);

  return (
    <div className={styles.nav}>
      <>
        <SvgIcon icon={Heart} b={faves.length}></SvgIcon>
      </>
      <>
        <Spacer h={2} />
        <Spacer h={2} />
        <img src={"https://svgshare.com/i/tgL.svg"} alt="mySvgImage" />
        <Spacer h={2} />
        <Spacer h={2} />
      </>

      <div onClick={() => setCartView(!cartView)}>
        <SvgIcon icon={Cart} b={cart.length} fill={cartView ? "#f00" : null} />
      </div>
    </div>
  );
}
