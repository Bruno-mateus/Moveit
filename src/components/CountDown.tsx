import { useState, useEffect, useContext } from 'react';
import styles from '../style/components/CountDown.module.css';
import {ChallengesContext} from '../context/ChallengesContext';
import { CountDownContext } from '../context/CountDownContext';



export function CountDown(){

 const {
   minutes,
  seconds,
   IsActive,
   hasFineshed,
   startCountDown,
   resetCountDown
  }= useContext(CountDownContext);

  const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('');



 
  return (
  <div>
    <div className={styles.CountDownContainer}>
      <div>
          <span>{minuteLeft}</span>
         <span>{minuteRight}</span>
      </div>
          <span>:</span>
      <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
      </div>
    </div>

   { 
   hasFineshed ? (
    <button
    disabled
    className={`${styles.CountDownButton}`}
    >
     Ciclo encerrado <img src="icons/check.svg"alt="finished"/>
      </button>
   ):<>  { IsActive? (
    <button type="button" 
    className={`${styles.CountDownButton} ${styles.CountDownButtonActive}`}
    onClick={resetCountDown}
    >
     Abondonar ciclo
      </button>
 ):(
   <button type="button" 
   className={styles.CountDownButton}
   onClick={startCountDown}
   >
     Inciar ciclo
     </button>) 
     }
   </>
   }


   

  </div>
  )
}