import styles from '../styles/ItemCard.module.css';
import { SHeart, SCart } from './Icons'
import SvgIcon from './SvgIcon'

import { Tag } from '@geist-ui/core';

export default function ItemCard({item}) {

    return (<div className={styles.box}>
                <img className={styles.img} src={item.img} alt={item.name} />
                <div className={styles.details}>
                    <h4>{item.name}</h4>
                    <p className={styles.desc}>{item.description}</p>
                    <div className={item.available>5?"available":"atfewleft"}>
                        {item.available>5?
                        <Tag style={{background:"rgba(0, 167, 17, 0.5)", border:"1px solid rgba(0, 202, 20, 0.5)",boxShadow:"5px 5px 20px rgba(196, 255, 202, 0.5)", borderRadius:"10px"}}>Available</Tag>:
                        <Tag style={{background:"rgba(255, 147, 69, 0.8)",border:"1px solid rgba(255, 148, 70, 0.5)",boxShadow:"5px 5px 20px rgba(255, 210, 178, 0.5)",borderRadius:"10px"}}>Only {item.available} left!</Tag>}
                    </div>
                    <div className={styles.actions}>
                        <div className="price">{item.price}</div>
                        <SvgIcon icon={SCart}/>
                        <SvgIcon icon={SHeart}/>
                    </div>
                </div>
            </div>);
}