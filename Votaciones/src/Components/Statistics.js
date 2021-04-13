import React from "react";
import Statistic from "./Statistic";

export default function Statistics(props) {
  const { promedio, good, neutral, bad } = props;

  return (
    <div>
      <h3>Statistics</h3>
      {good + neutral + bad == 0 ? (
        <p>There are no results, press more than one button!</p>
      ) : (
        <div>
          <Statistic estado="good" valor={good} />
          <Statistic estado="neutral" valor={neutral} />
          <Statistic estado="bad" valor={bad} />
          <Statistic
            estado="all"
            valor={good + neutral + bad}
          />
          <Statistic
            estado="average"
            valor={promedio / (good + neutral + bad)}
          />
          <Statistic
            estado="positive"
            valor={
              (good / (good + neutral + bad)) * 100
            }
          />
        </div>
      )}
    </div>
  );
}
