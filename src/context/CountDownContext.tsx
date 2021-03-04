
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface countDownContextData{
  minutes:number,
  seconds:number,
  hasFineshed:boolean,
  IsActive:boolean,
  startCountDown:()=>void,
  resetCountDown:()=>void

}
interface countDownProviderProps{
  children: ReactNode;
}
export const CountDownContext = createContext({} as countDownContextData);

export function CountDownProvider({children}:countDownProviderProps){
  const {startNewChallenge} = useContext(ChallengesContext);

  const [time,setTime] = useState(25*60);
  const [IsActive,setIsActive] = useState(false);
  const [hasFineshed, setHasFinished] =useState(false)

  const minutes = Math.floor(time/60);
  const seconds = time%60;

  function startCountDown(){
    setIsActive(true)
  }

function resetCountDown(){
  clearTimeout(countDownTimeout);
  setIsActive(false);
  setHasFinished(false);
  setTime(25*60);
}
let countDownTimeout : NodeJS.Timeout;
  useEffect(()=>{
    if(IsActive && time >0){
      countDownTimeout = setTimeout(()=>{
        setTime(time-1);
      },1000)
    }else if(IsActive && time === 0 ){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [IsActive,time])

  return(
    <CountDownContext.Provider value={{
      minutes,
      seconds,
      hasFineshed,
      IsActive,
      startCountDown,
      resetCountDown
    }}>

      {children}
    </CountDownContext.Provider>
  )
}