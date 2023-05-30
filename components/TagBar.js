import { Button, ButtonGroup } from "@geist-ui/core";
import tagstyles from "../styles/Tagbar.module.css";
import { useContext } from "react";

import { AppContext } from "../pages";

export default function Tagbar({ item }) {
  const { tag, setTag } = useContext(AppContext);

  return (
    <div className={tagstyles.tags}>
      <>
        <ButtonGroup type="success">
          <Button
            style={{
              color: "grey",
              backgroundColor: !tag ? "#ff0" : "#fff",
              border: "1px solid #ddd",
              borderRadius: "30px",
              marginLeft: "10px"
            }}
            onClick={() => setTag(null)}
          >
            All Items
          </Button>
          <Button
            style={{
              color: "grey",
              backgroundColor: tag === "drinks" ? "#ff0" : "#fff",
              border: "1px solid #ddd",
              borderRadius: "30px",
              marginLeft: "10px"
            }}
            onClick={() => setTag("drinks")}
          >
            {" "}
            Drinks
          </Button>
          <Button
            style={{
              color: "grey",
              backgroundColor: tag === "fruit" ? "#ff0" : "#fff",
              border: "1px solid #ddd",
              borderRadius: "30px",
              marginLeft: "10px"
            }}
            onClick={() => setTag("fruit")}
          >
            Fruit
          </Button>
          <Button
            style={{
              color: "grey",
              backgroundColor: tag === "bakery" ? "#ff0" : "#fff",
              border: "1px solid #ddd",
              borderRadius: "30px",
              marginLeft: "10px"
            }}
            onClick={() => setTag("bakery")}
          >
            Bakery
          </Button>
        </ButtonGroup>
      </>{" "}
    </div>
  );
}

{
  /* <Tag style={{cursor:"pointer", border:"1px solid rgba(190, 190, 190, 0.5)", boxShadow:"5px 5px 20px rgba(181, 181, 181, 0.2)", borderRadius:"30px"}}>Drinks</Tag>
    <Tag style={{cursor:"pointer", border:"1px solid rgba(190, 190, 190, 0.5)", boxShadow:"5px 5px 20px rgba(181, 181, 181, 0.2)", borderRadius:"30px"}}>Fruit</Tag>
    <Tag style={{cursor:"pointer", border:"1px solid rgba(190, 190, 190, 0.5)", boxShadow:"5px 5px 20px rgba(181, 181, 181, 0.2)", borderRadius:"30px"}}>Bakery</Tag> */
}
