
import './App.css';
import React from 'react';

function App() {
  const [color, setColor] = React.useState("blue");
  const [count, setCount] = React.useState(0);
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());



  React.useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString(), 1000));
    return () => { clearInterval(interval); }
  }, [color, count]);


  return (

    <div>

      {/* This component has two children that display a message and a clock */}
      <DisplayMessage color={color} />


      <Clock2 time={time} />

      <p>Total count: {count} </p>
      <button onClick={() => { setColor(toggle(color)); setCount(count + 1) }}>
        Click me React To Change Colors
      </button>

    </div>

  );
}
function DisplayMessage(props) {
  return <h1 style={{ color: props.color }}>Hello React World NEW Format</h1>;

}
// function Clock(props) {
//     return <p>React Clock: {props.time} </p>
// }

function toggle(color) {
  if (color === "blue") {
    return "red";
  } else {
    return "blue";
  }
}

// class Clock2 extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (<p>React Clock2: {this.props.time}</p>);
//     }
// }

function Clock2(props) {
  return (<p> React Clock2: {props.time}</p>);
}




// setInterval(() => root.render(<Main />), 1000);


// root.render(<Main />) // first load




export default App;
