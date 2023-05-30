import styles from "../styles/ItemGrid.module.css";

import { useContext, useEffect } from "react";

import { AppContext } from "../pages";
import ItemCard from "./ItemCard";

export default function ItemGrid() {
  const { search, tag, items, fitems, sFitems } = useContext(AppContext);

  useEffect(() => {
    if (tag) {
      sFitems(
        items.filter(
          (i) =>
            i.type === tag &&
            i.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      sFitems(
        items.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [search, tag]);

  return (
    <div className={styles.grid}>
      {fitems && fitems.map((item) => <ItemCard key={item.id} item={item} />)}
    </div>
  );
}
