import React, { useState, useEffect } from 'react';


const CountdownTimer = () => {
 const [time, setTime] = useState({
   minutes: 2,
   seconds: 0
 });


 useEffect(() => {
   const timer = setInterval(() => {
     if (time.minutes === 0 && time.seconds === 0) {
       clearInterval(timer);
       console.log('You Are Out Of Time!');
     } else {
       setTime(prevTime => {
         if (prevTime.seconds === 0) {
           return { minutes: prevTime.minutes - 1, seconds: 59 };
         } else {
           return { ...prevTime, seconds: prevTime.seconds - 1 };
         }
       });
     }
   }, 1000);


   return () => clearInterval(timer);
 }, [time])


 return (
   <div>
     <h1>Countdown Timer</h1>
     <p>{`${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
   </div>
 );
};

export default CountdownTimer