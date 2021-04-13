import React from "react";
import './Button.scss'

export default function Button(props) {
  const { boton, estado } = props;
  return <button className="button" onClick={boton}>{estado}</button>;
}
