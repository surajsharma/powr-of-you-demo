import styles from "../styles/ItemCard.module.css";
import { SHeart, SCart } from "./Icons";
import SvgIcon from "./SvgIcon";

import { Tag } from "@geist-ui/core";
import { useContext } from "react";
import { AppContext } from "../pages";

export default function ItemCard({ item }) {
  const { faves, setFaves, cart, setCart, co, sco } = useContext(AppContext);

  const handleAddToCart = (item) => {
    if (cart.includes(item.id)) {
      setCart(cart.filter((c) => c != item.id));
      let n = co;
      delete n[item.id];
      sco(n);
      return;
    }
    setCart(Array.from(new Set([...cart, item.id])));
    const unitPrice = parseFloat(item.price.replace("£", ""));
    sco({
      ...co,
      [item.id]: {
        count: 1,
        unitPrice,
        subtotal: unitPrice * 1
      }
    });
  };
  const handleAddToFaves = (item) => {
    if (faves.includes(item.id)) {
      setFaves(faves.filter((f) => f != item.id));
      return;
    }
    setFaves(Array.from(new Set([...faves, item.id])));
  };

  return (
    <div className={styles.box}>
      <img className={styles.img} src={item.img} alt={item.name} />
      <div className={styles.details}>
        <h4>{item.name}</h4>
        <p className={styles.desc}>{item.description}</p>
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
        <div className={styles.actions}>
          <div className="price">{item.price}</div>
          <div onClick={() => handleAddToCart(item)}>
            <SvgIcon
              icon={SCart}
              fill={cart.includes(item.id) ? "#ff00ff" : null}
            />
          </div>
          <div onClick={() => handleAddToFaves(item)}>
            <SvgIcon
              icon={SHeart}
              fill={faves.includes(item.id) ? "#ff00ff" : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
