import React from "react";

export default function Button(props) {
  const { boton, estado } = props;
  return <button onClick={boton}>{estado}</button>;
}
