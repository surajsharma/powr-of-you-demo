import React from "react";

export default function Free({ free }) {
  return (
    <p>
      {free.freeCoffees > 0 && <>FREE COFFEE(S): {free.freeCoffees}</>}
      <br />
      {free.freeCokes > 0 && <>FREE COKE(S): {free.freeCokes}</>}
    </p>
  );
}
