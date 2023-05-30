import { ITEMS_URL, ITEMS_URL_CORS } from "../config";
import { createContext, useEffect, useState } from "react";
import styles from "../styles/home.module.css";

import ItemGrid from "../components/ItemGrid";
import Navigation from "../components/Navigation";
import Searchbar from "../components/SearchBar";
import Tagbar from "../components/TagBar";

export const AppContext = createContext("");

function Home() {
  useEffect(() => {}, []);

  const [search, setSearch] = useState("");
  const [tag, setTag] = useState(null);
  const [faves, setFaves] = useState([]);
  const [cart, setCart] = useState([]);

  const [items, setItems] = useState([]);
  const [fitems, sFitems] = useState([]);

  useEffect(async () => {
    const resp = await fetch(ITEMS_URL);
    const data = await resp.json();
    setItems(data);
    sFitems(data);
  }, []);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        tag,
        setTag,
        faves,
        setFaves,
        cart,
        setCart,
        items,
        setItems,
        fitems,
        sFitems
      }}
    >
      <main className={styles.main}>
        <h4>Groceries</h4>
        <div className={styles.top}>
          <Searchbar search={search} />
          <Navigation />
        </div>
        <Tagbar />
        <div className={styles.items}>
          <h3>Trending Items</h3>
          <ItemGrid />
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default Home;
