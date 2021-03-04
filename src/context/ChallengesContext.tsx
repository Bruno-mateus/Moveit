import {createContext, useState, ReactNode, useEffect} from 'react';
import typescript from 'typescript';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

interface challenge{
  type: 'body'|'eye';
  description: string;
  amount: number;
}
interface ChalengesProviderProps {
  children: ReactNode;
  challengesCompleted:number;
  currentExperience:number;
  level:number;
}
interface ChallengesContextData {
  level:number; 
  levelUp:() =>void;
  experienceToNextLevel:number;
  activeChallenges:challenge;
  currentExperience:number;
  challengesCompleted:number;
  startNewChallenge:()=>void;
  resetChallenge:()=>void;
  completedChallenge:()=>void;
  CloseModal:()=>void;
}
export const  ChallengesContext= createContext({} as ChallengesContextData);
export function ChalengesProvider({children,...rest}:ChalengesProviderProps){
  const [level,setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience]  = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  
const [OpenModal, setOpenModal] = useState(false);

  const [activeChallenges, setActiveChallenges] = useState(null); 
  const experienceToNextLevel = Math.pow((level+1)*4, 2);
  useEffect(()=>{
    Notification.requestPermission();
  }, [])
  useEffect(()=>{
    Cookies.set('level',String(level))
    Cookies.set('currentExperience',String(currentExperience))
    Cookies.set('challengesCompleted',String(challengesCompleted))},
    [[level,currentExperience,challengesCompleted]])

  function levelUp(){
    setLevel(level +1)
    setOpenModal(true)
  }
  function resetChallenge(){
    setActiveChallenges(null);
  }
  function completedChallenge(){
    if(!activeChallenges){
      return;
    }
    const {amount} = activeChallenges;
    let finalExperience = currentExperience + amount;
    
    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenges(null);
    setChallengesCompleted(challengesCompleted +1 );
  }

  function CloseModal(){
    setOpenModal(false);
  }

  function startNewChallenge(){
   const randomChallengeIndex = Math.floor(Math.random()*challenges.length);
  const challenge = challenges[randomChallengeIndex];
 
  setActiveChallenges(challenge)

  new Audio('/notification.mp3').play()

    if(Notification.permission === 'granted'){
      new Notification(
        'Novo desafio 🚀',
        {
          body:`valendo ${challenge.amount} xp!`
        }
      )
    }
  }
 
  return(
    <ChallengesContext.Provider value={
      {
      level, 
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenges,
      resetChallenge,
      experienceToNextLevel,
      completedChallenge,
      CloseModal

      }}
      > 
      {children}
      {OpenModal &&<LevelUpModal/>}
    </ChallengesContext.Provider>
  )
}