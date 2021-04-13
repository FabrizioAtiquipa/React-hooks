import React from "react";
import Statistic from "./Statistic";

export default function Statistics(props) {
  const { promedio, good, neutral, bad } = props;

  return (
    <div> 
      <h3 style={{fontFamily:"monospace", fontSize:30}}>Statistics</h3>
      {good + neutral + bad == 0 ? (
        <p style={{fontFamily:"monospace", fontSize:15}}>There are no results, press more than one button!</p>
      ) : (
        <div style={{fontFamily:"monospace", fontSize:15}}>
          <Statistic estado="GOOG" valor={good} />
          <Statistic estado="NEUTRAL" valor={neutral} />
          <Statistic estado="BAD" valor={bad} />
          <Statistic
            estado="ALL"
            valor={good + neutral + bad}
          />
          <Statistic
            estado="AVERAGE"
            valor={promedio / (good + neutral + bad)}
          />
          <Statistic
            estado="POSITIVE"
            valor={
              (good / (good + neutral + bad)) * 100
            }
          />
        </div>
      )}
    </div>
  );
}
