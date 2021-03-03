import style from '../style/components/LevelUp.module.css' 
import {ChallengesContext} from '../context/ChallengesContext'
import { useContext } from 'react'

export function LevelUpModal(){
  const {level,CloseModal} = useContext(ChallengesContext);
return (
  <div className={style.overlay}>
    <div className = {style.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo nivel</p>
        <button type="button" onClick={CloseModal}>
        <img src="/icons/close.svg" alt="Close"></img>
        </button>
    </div>

  </div>
  )
}