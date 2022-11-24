
import './App.css';

import React, {useState, useEffect} from "react";

function App() {

  const [color, setColor] = useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);

  useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
  }, [color, count]);

  return (<div>

    <DisplayMessage color={color} />
    <Clock />
    <CounterDisplay count={count} />
    <UserActions setColor={setColor} setCount={setCount} count={count} color={color} />

  </div>

  );
}
function DisplayMessage(props) {
  return <h1 style={{ color: props.color }}>Hello React World NEW Format</h1>;

}

function toggle(color) {
  if (color === "blue") {
    return "red";
  } else {
    return "blue";
  }
}

function Clock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(interval);
  }, [time]);

  return <p>React Clock: {time} </p>
}


function UserActions(props) {
  return <button onClick={() => {
    props.setColor(toggle(props.color));
    props.setCount(props.count + 1)
  }}>
    Click me React
  </button>
}

function CounterDisplay(props) {
  return <p>{props.count}</p>;
  }
  
export default App;
