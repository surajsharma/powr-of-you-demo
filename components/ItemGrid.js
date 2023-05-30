import styles from "../styles/ItemGrid.module.css";

import { useCallback, useState, useEffect } from 'react'

import {ITEMS_URL, ITEMS_URL_CORS} from "../config"


import ItemCard from './ItemCard'

export default function ItemGrid({search, category}) {

    let [items, setItems] = useState([])


    useEffect(async()=>{
        const resp = await fetch(ITEMS_URL_CORS);
        const data = await resp.json();
        console.log(data);
        setItems(data);
    },[])

    return (<div className={styles.grid}>
                {items&&items.map(item=><ItemCard key={item.id} item={item}/>)}
            </div>);

}