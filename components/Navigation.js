import { useCallback, useState } from "react";
import styles from "../styles/Navigation.module.css";
import { Heart, Cart } from "./Icons";

import SvgIcon from "./SvgIcon";
import { Spacer } from "@geist-ui/core";
import { Badge } from "@geist-ui/core";

import Avatar from "../avatar.svg";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <>
        <SvgIcon icon={Heart} b={10}></SvgIcon>
        <Spacer h={1} />
      </>
      <img src={"http://s.cdpn.io/3/kiwi.svg"} />
      <Spacer h={1} />

      <SvgIcon icon={Cart} b={9} />
    </div>
  );
}
