import { createContext, useEffect, useState } from "react";
import { ITEMS_URL } from "../config";
import styles from "../styles/home.module.css";

import ItemGrid from "../components/ItemGrid";
import Navigation from "../components/Navigation";
import Searchbar from "../components/SearchBar";
import Tagbar from "../components/TagBar";
import Cart from "../components/Cart";

import { Spacer, Spinner } from "@geist-ui/core";

export const AppContext = createContext("");

function Home() {
  useEffect(() => {}, []);

  const [loading, setLoading] = useState(false);
  const [cartView, setCartView] = useState(false);

  const [search, setSearch] = useState("");
  const [tag, setTag] = useState(null);
  const [faves, setFaves] = useState([]);
  const [cart, setCart] = useState([]);

  const [items, setItems] = useState([]);
  const [fitems, sFitems] = useState([]);

  const [co, sco] = useState({});

  const [free, setFree] = useState({ coffee: 0, coke: 0 });

  useEffect(async () => {
    setLoading(true);
    const resp = await fetch(ITEMS_URL);
    const data = await resp.json();
    setItems(data);
    sFitems(data);
    setLoading(false);
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
        sFitems,
        setCartView,
        cartView,
        co,
        sco,
        free,
        setFree
      }}
    >
      <main className={styles.main}>
        <h4>Groceries</h4>
        <div className={styles.top}>
          <Searchbar search={search} />
          <Spacer />
          {loading && <Spinner />}
          <Navigation />
        </div>
        {!cartView && <Tagbar />}
        <br />
        <h3>
          {tag && !cartView
            ? `Items tagged ${tag.toUpperCase()}`
            : cartView
            ? "Checkout"
            : "Trending Items"}
        </h3>
        <div className={styles.items}>{cartView ? <Cart /> : <ItemGrid />}</div>
      </main>
    </AppContext.Provider>
  );
}

export default Home;
