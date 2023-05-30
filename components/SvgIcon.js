import styles from "../styles/Navigation.module.css"

export default function SvgIcon({icon}) {
    return <div class={styles.icon}>
        <svg width={icon.width} height={icon.height}  xmlns="http://www.w3.org/2000/svg" viewBox={icon.solid.a.viewBox}>
        {icon.solid.path.map((p,i)=>{
            return <g key={i} fill={p.fill}><path d={p.d}/></g>
        })}</svg>
    </div>
}
