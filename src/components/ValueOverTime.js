
// import React, { useState, useEffect } from "react";


// function ValueOverTime(props) {
//     const [value, setValue] = useState(0);
//     const [time, setTime] = useState();

//     useEffect(() => {
       
//           const interval =  setInterval(() => {
//                 console.log("testing");
//                 setTime(new Date().toLocaleTimeString())
//                 setValue(() => props.value + 1);
//             }, 1000);
        
//         // return () => clearInterval(interval);
//     }, [props.value]);


//     return (
//         <p>Current value at time {time} is: {value}.
//             Original value was {props.value}.</p>
//     );

// }
// export default ValueOverTime;


// import { useState, useEffect } from 'react';

// export default function ExampleCounter() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevCounter) => prevCounter + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App">
//       <h1>Counter: {counter}</h1>
//     </div>
//   );
// }

