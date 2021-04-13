import React, { useState } from "react";
import ReactDOM from "react-dom";
import Statistics from "./Components/Statistics";
import Button from "./Components/Button";
import { Layout } from "antd";
import MenuTop from "./Components/MenuTop/MenuTop";
import "./index.scss";

const App = () => {
  const { Header } = Layout;
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [promedio, setPromedio] = useState(0);

  const BUENO = () => {
    setGood(good + 1);
    setPromedio(promedio + 1);
  };
  const NEUTRAL = () => {
    setNeutral(neutral + 1);
    setPromedio(promedio + 0);
  };
  const MALO = () => {
    setBad(bad + 1);
    setPromedio(promedio - 1);
  };

  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <Layout className="layout">
        <h1>GIVE FEEDBACK</h1>
        <Button estado="GOOD" boton={BUENO} />
        <Button estado="NEUTRAL" boton={NEUTRAL} />
        <Button estado="BAD" boton={MALO} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          promedio={promedio}
        />
      </Layout>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
