import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Layout } from "antd";
import MenuTop from "./Components/MenuTop/MenuTop";
import { Button } from "antd";
import { FormOutlined, RightOutlined } from "@ant-design/icons";

const App = (props) => {
  const { Header } = Layout;
  const [selected, setSelected] = useState(0);
  const [votaciones, setVotaciones] = useState([0]);
  const [aceptacion, setAceptacion] = useState(-1);
  const [contador, setContador] = useState(0);

  const Siguiente = () => {
    setSelected(getRandomInt(0, anecdotes.length));
    calcularAceptacion();
  };

  function calcularAceptacion() {
    console.log(votaciones);
    let index = 0;
    let mayor = 0;
    while (index < anecdotes.length) {
      if (votaciones[index]) {
        if (votaciones[index] > mayor) {
          mayor = votaciones[index];
          setAceptacion(index);
        }
      }
      index++;
    }
  }

  const Voto = () => {
    if (!votaciones[selected]) {
      votaciones[selected] = 0;
    }
    votaciones[selected] = votaciones[selected] + 1;
    setVotaciones(votaciones);
    setContador(contador + 1);

    calcularAceptacion();
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <Layout className="layout">
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <br />
        has {votaciones[selected]} votes
        <br />
        <br />
        <Button type="primary" onClick={Voto} icon={<FormOutlined />}>
          Vote
        </Button>
        <Button
          type="primary"
          onClick={Siguiente}
          icon={<RightOutlined />}
        >
          Next Anecdote
        </Button>
        <br />
        <br />
        <hr />
        {aceptacion >= 0 ? (
          <div>
            <h1>Anecdote with most votes</h1>
            {props.anecdotes[aceptacion]}
            <br />
            has {votaciones[aceptacion]} votes
          </div>
        ) : (
          <div></div>
        )}
      </Layout>
    </Layout>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
