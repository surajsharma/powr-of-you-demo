import styles from "../styles/CartItem.module.css";

import { Spacer, Tag } from "@geist-ui/core";
import { Minus, Plus, X } from "@geist-ui/icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../pages";
export default function CartIem({ item }) {
  const {
    cart,
    setCart,
    sTotal,
    setStotal,
    gTotal,
    setGtotal,
    discount,
    setDiscount,
    items
  } = useContext(AppContext);

  const [count, setCount] = useState(1);

  const inc = (item) => {
    if (count < item.available) {
      setCount(count + 1);
    }
  };

  const dec = (item) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((c) => c != item.id));
  };

  useEffect(() => {
    const st = count * parseFloat(item.price.replace("£", ""));
    setStotal(st);

    setGtotal(st - discount);
  }, [cart, count]);

  return (
    <div className={styles.box}>
      <img className={styles.img} src={item.img} alt={item.name} />
      <div className={styles.details}>
        <h4>{item.name}</h4>
        <div className="price">
          {item.price} X {count} = £
          {count * parseFloat(item.price.replace("£", ""))}
        </div>
        <br />
        <div className={item.available > 5 ? "available" : "atfewleft"}>
          {item.available > 10 ? (
            <Tag
              style={{
                background: "rgba(0, 167, 17, 0.5)",
                border: "1px solid rgba(0, 202, 20, 0.5)",
                boxShadow: "5px 5px 20px rgba(196, 255, 202, 0.5)",
                borderRadius: "10px"
              }}
            >
              Available
            </Tag>
          ) : (
            <Tag
              style={{
                background: "rgba(255, 147, 69, 0.8)",
                border: "1px solid rgba(255, 148, 70, 0.5)",
                boxShadow: "5px 5px 20px rgba(255, 210, 178, 0.5)",
                borderRadius: "10px"
              }}
            >
              Only {item.available} left!
            </Tag>
          )}
        </div>
        <hr />
        <div>
          <Tag
            style={{
              background: "#7FD287",
              border: "1px solid rgba(0, 202, 20, 0.5)",
              boxShadow: "5px 5px 20px rgba(196, 255, 202, 0.5)",
              borderRadius: "10px",
              cursor: "pointer"
            }}
            onClick={() => inc(item)}
          >
            <Plus color="green" size={16}></Plus>
          </Tag>
          &nbsp;&nbsp;&nbsp;
          {count}&nbsp;&nbsp;&nbsp;
          <Tag
            style={{
              background: "#E86F6F",
              border: "1px solid red",
              boxShadow: "5px 5px 20px rgba(196, 255, 202, 0.5)",
              borderRadius: "10px",
              cursor: "pointer"
            }}
            onClick={() => dec(item)}
          >
            <Minus color="red" size={16}></Minus>
          </Tag>
          <Spacer />
          <Tag
            style={{
              border: "1px solid rgba(0, 0, 20, 0.5)",
              boxShadow: "5px 5px 20px rgba(196, 255, 202, 0.5)",
              borderRadius: "10px",
              cursor: "pointer"
            }}
            onClick={() => removeFromCart(item)}
          >
            <X color="black" size={16}></X>
          </Tag>
        </div>
        <br />
      </div>
    </div>
  );
}
