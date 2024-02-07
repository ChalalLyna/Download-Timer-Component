// npm run dev
import { useState, useEffect } from 'react'
import logo from './assets/figma-logo.png';

import './App.css'

export default function App() {

  const [counter, setCounter] = useState(10);

  useEffect(function() {
    // setInterval takes 2 parameters : The first parameter is the function that you want to be executed repeatedly (This function is commonly referred to as the "callback" function), The second parameter represents the time, in milliseconds, between each execution of the callback function
    // setInterval(() => { /* your code here */ }, 1000);
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter - 1;
        if (newCounter === 0) {
          clearInterval(intervalId);
        }
        return newCounter;
      });
    }, 1000);
  
    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
     <img src={logo} alt="figma logo" className='logo'/>
     <h1>Download Figma </h1>
     <h3>La manière dont vous concevez , alignez  et créez  a son importance. Faites-le ensemble avec Figma.</h3>
     <DownloadTimer counter={counter}></DownloadTimer>
    </>
  )
}

function DownloadTimer(props){
  return(
    <>
    <p>waiting {props.counter} seconds</p>
    <button disabled={props.counter > 0} className={props.counter > 0 ? 'disabled' : ''}>DOWNLOAD</button>
    {/* If the condition (props.counter > 0) is true, it evaluates to the string 'disabled', indicating that the button should have the 'disabled' CSS class. If the condition is false, it evaluates to an empty string '', indicating that no additional class should be applied */}
    </>
  );

}
