import styles from "../styles/Navigation.module.css";
import { Badge } from "@geist-ui/core";
export default function SvgIcon({ icon, b }) {
  return b > 0 ? (
    <div className={styles.icon}>
      <Badge
        style={{
          fontSize: "20px",
          position: "absolute",
          marginLeft: "50px",
          marginTop: "-20px"
        }}
      >
        {b}
      </Badge>
      <svg
        width={icon.width}
        height={icon.height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.solid.a.viewBox}
      >
        {icon.solid.path.map((p, i) => {
          return (
            <g key={i} fill={p.fill}>
              <path d={p.d} />
            </g>
          );
        })}
      </svg>
    </div>
  ) : (
    <div className={styles.icon}>
      <svg
        width={icon.width}
        height={icon.height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.solid.a.viewBox}
      >
        {icon.solid.path.map((p, i) => {
          return (
            <g key={i} fill={p.fill}>
              <path d={p.d} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
