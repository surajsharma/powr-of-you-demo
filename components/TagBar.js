import styles from '../styles/ItemCard.module.css';
import { SHeart, SCart } from './Icons'
import SvgIcon from './SvgIcon'
import tagstyles from "../styles/Tagbar.module.css"
import { Tag,Text,Button,ButtonGroup } from '@geist-ui/core';

export default function Tagbar({item}) {
    return <div className={tagstyles.tags}>
<>
  <ButtonGroup type="success">
    <Button style={{color:"grey", backgroundColor:"#fff", border:"1px solid #ddd", borderRadius:"30px", marginLeft:"10px"}}>All Items</Button>
    <Button style={{color:"grey", backgroundColor:"#fff", border:"1px solid #ddd", borderRadius:"30px", marginLeft:"10px"}}> Drinks</Button>
    <Button style={{color:"grey", backgroundColor:"#fff", border:"1px solid #ddd", borderRadius:"30px", marginLeft:"10px"}}>Fruit</Button>
    <Button style={{color:"grey", backgroundColor:"#fff", border:"1px solid #ddd", borderRadius:"30px", marginLeft:"10px"}}>Bakery</Button>
  </ButtonGroup>
  
</>    </div>
}

    {/* <Tag style={{cursor:"pointer", border:"1px solid rgba(190, 190, 190, 0.5)", boxShadow:"5px 5px 20px rgba(181, 181, 181, 0.2)", borderRadius:"30px"}}>Drinks</Tag>
    <Tag style={{cursor:"pointer", border:"1px solid rgba(190, 190, 190, 0.5)", boxShadow:"5px 5px 20px rgba(181, 181, 181, 0.2)", borderRadius:"30px"}}>Fruit</Tag>
    <Tag style={{cursor:"pointer", border:"1px solid rgba(190, 190, 190, 0.5)", boxShadow:"5px 5px 20px rgba(181, 181, 181, 0.2)", borderRadius:"30px"}}>Bakery</Tag> */}
