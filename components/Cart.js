import styles from "../styles/ItemGrid.module.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../pages";
import { Button, Text } from "@geist-ui/core";
import CartIem from "./CartItem";
import Free from "./Free";

export default function Cart() {
  const { items, cart, co, free, setFree } = useContext(AppContext);

  const [isEmpty, setIsEmpty] = useState(false);
  const [sTotal, setStotal] = useState(0);
  const [gTotal, setGtotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setIsEmpty(true);
    }
  }, [cart]);

  function calcStotal() {
    let st = 0;
    Object.keys(co).forEach((k) => {
      st += co[k].subtotal;
    });
    setStotal(st);
  }

  function calcDiscount() {
    let d = 0;
    let freeCokes = 0;
    let freeCoffees = 0;
    Object.keys(co).forEach((k) => {
      if (k == 642) {
        freeCokes = parseInt(Math.abs(co[k].count / 6));
        d += freeCokes * 0.99;
      }

      if (k == 532) {
        freeCoffees = parseInt(Math.abs(co[k].count / 3));
        d += freeCoffees * 0.65;
      }
    });
    setDiscount(d);
    setFree({ freeCokes, freeCoffees });
  }

  useEffect(() => {
    calcStotal();
    calcDiscount();
    setGtotal(sTotal - discount);
  }, [co]);

  return (
    <>
      <div className={styles.grid}>
        {isEmpty && <h4>Cart is empty!</h4>}
        {items &&
          items.map(
            (item) =>
              cart.includes(item.id) && (
                <CartIem key={item.id} item={item} co={co} />
              )
          )}
      </div>
      {!isEmpty ? (
        <div>
          <br />
          <Text>Subtotal = &nbsp;£{sTotal.toFixed(2)}</Text>
          <br />
          <Text>Total = &nbsp;£{gTotal.toFixed(2)}</Text>
        </div>
      ) : null}

      {discount ? (
        <pre>
          <Text>Total Discount = &nbsp;£{discount.toFixed(2)} from:</Text>
          <Free free={free} />
        </pre>
      ) : null}

      <Button type="success">Checkout</Button>
    </>
  );
}
