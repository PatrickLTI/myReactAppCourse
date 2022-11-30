import React, { useState, useEffect } from "react";
import { DisplayMessage } from './DisplayMessage';
import { Clock } from './Clock';
import { UserActions } from './UserActions';
import { CounterDisplay } from './CounterDisplay';
// import ValueOverTime from "./ValueOverTime";

function Main() {

  const [color, setColor] = useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
  // const [value, setValue] = useState(JSON.parse(localStorage.getItem('value')) || 0);

  useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
  }, [color, count]);

  return (
  <div>

    <DisplayMessage color={color} />
    <Clock />
    <CounterDisplay count={count} />
    <UserActions setColor={setColor} setCount={setCount} count={count} color={color} />
    {/* <ValueOverTime value={0}/> */}
  </div>
  );
}
export default Main;
