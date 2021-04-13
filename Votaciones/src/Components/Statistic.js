import React from "react";

export default function Statistic(props) {

  const { estado, valor } = props;
  return (
    <div>
      <p>
        {estado} {valor}
      </p>
    </div>
  );
}
