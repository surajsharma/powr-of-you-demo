import { useCallback, useEffect, useState } from 'react'

import styles from '../styles/home.module.css'

import Searchbar from "../components/SearchBar";
import Navigation from '../components/Navigation';
import Tagbar from '../components/TagBar';

function Checkout() {

  useEffect(() => {
  }, [])

  return (
    <main className={styles.main}>
      <h4>Groceries</h4>
      <div className={styles.top}>
        <Searchbar />
        <Navigation />
      </div>
        <Tagbar />
      <div className={styles.items}>
        <h3>Checkout</h3>
      </div>
    </main>
  )
}

export default Checkout
