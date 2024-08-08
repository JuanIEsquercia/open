import { useState } from "react"

const Button=(props)=>{
  return (
    <>
    <button onClick={props.onClick} style={{height:"25px",}}>{props.name}</button>
    {props.children}
    </>
  )
}

const Statics = (props) => {
  if (isNaN(props.text)) {
    return (
      <>
        <p>No hubo Feedback aun</p>
      </>
    );
  } else {
    return (
      <>
        <p>{props.nombre}: {props.text}</p>
      </>
    );
  }
}

const StaticsLine = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
        <p>No hubo Feedback aun</p>
      </>
    );
  } else {
    return (
      <>
        <Statics nombre="Good" text={props.good} />
        <Statics nombre="Neutral" text={props.neutral} />
        <Statics nombre="Bad" text={props.bad} />
        <Statics nombre="Totales" text={props.all} />
        <Statics nombre="El promedio es " text={props.promedio} />
      </>
    );
  }
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [prom, setProm] = useState(0);

  const votoGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setProm(prom + 1);
  }

  const votoBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setProm(prom - 1);
  }

  const votoNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }

  const promediar = () => {
    if (all === 0) return 0;
    const total = (good / all).toFixed(2);
    return total;
  }

  const promedio = promediar();

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={votoGood} name="Good" />
      <Button onClick={votoNeutral} name="Neutral" />
      <Button onClick={votoBad} name="Bad" />
      <StaticsLine good={good} neutral={neutral} bad={bad} all={all} promedio={promedio} />
    </>
  );
}

export default App;