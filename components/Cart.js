import styles from "../styles/ItemGrid.module.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../pages";
import { Button, Text } from "@geist-ui/core";
import CartIem from "./CartItem";

export default function Cart() {
  const {
    items,
    sFitems,
    cart,
    sTotal,
    setStotal,
    gTotal,
    setGtotal,
    discount,
    setDiscount
  } = useContext(AppContext);

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!cart.length) {
      setIsEmpty(true);
    }
  }, [cart]);

  return (
    <>
      <div className={styles.grid}>
        {isEmpty && <h4>Cart is empty!</h4>}
        {items &&
          items.map(
            (item) =>
              cart.includes(item.id) && <CartIem key={item.id} item={item} />
          )}
      </div>
      {!isEmpty ? (
        <div>
          <br />
          <Text>Subtotal = &nbsp;£{sTotal}</Text>
          <Text>Discount = &nbsp;£{discount}</Text>
          <Text>Total = &nbsp;£{gTotal}</Text>

          <Button type="success" invert>
            Checkout
          </Button>
        </div>
      ) : null}
    </>
  );
}
