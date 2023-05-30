import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'

import Searchbar from "../components/SearchBar";
import ItemGrid from '../components/ItemGrid';
import Navigation from '../components/Navigation';
import Tagbar from '../components/TagBar';


function Home() {

  useEffect(() => {
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <Searchbar />
        <Navigation />
      </div>
        <Tagbar />
      <div className={styles.items}>
        <h3>Trending Items</h3>
        <ItemGrid search={""} />
      </div>
    </main>
  )
}

export default Home
