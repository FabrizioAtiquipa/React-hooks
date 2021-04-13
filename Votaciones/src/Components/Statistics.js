import React from "react";

export default function Statistics(props) {
  const { promedio, good, neutral, bad } = props;

  return (
    <div>
      <h3>Statistics</h3>
      {good + neutral + bad == 0 ? (
        <p>There are no results, press more than one button!</p>
      ) : (
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {good + neutral + bad}</p>
          <p>average {promedio / (good + neutral + bad)}</p>
          <p>positive {(good / (good + neutral + bad)) * 100}%</p>
        </div>
      )}
    </div>
  );
}
