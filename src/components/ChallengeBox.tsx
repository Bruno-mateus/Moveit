import { useContext } from 'react';
import styles from'../style/components/ChallengeBox.module.css'
import {ChallengesContext} from '../context/ChallengesContext'
import { CountDownContext } from '../context/CountDownContext';
export function ChallengeBox(){
 
  const {activeChallenges,resetChallenge,completedChallenge} = useContext(ChallengesContext);
  const {resetCountDown} = useContext(CountDownContext);
  function succes(){
    completedChallenge();
    resetCountDown();
  }
  function fail(){
    resetCountDown();
    resetChallenge();
  }
  return(
    <div className = {styles.ChallengeBoxContainer}>
      {
        activeChallenges?(
            <div className = {styles.ChallengeBoxActive}>
              <header>Ganhe {activeChallenges.amount} xp</header>
              <main>
                <img src={`icons/${activeChallenges.type}.svg`}/>
                <strong>Novo desafio</strong>
                <p>{activeChallenges.description}</p>
              </main>
            <footer>
              <button className={styles.challengeFailedButton}
              type="button"
              onClick={fail}
              >Falhei
              </button>
              <button
              className={styles.challengeSuccededButton}
              type="button"
              onClick={succes}
              >
                Completei
              </button>
            </footer>
            </div>
        ):(
          <div className = {styles.ChallengeBoxNoActive}>
          <strong>Finalize um ciclo para iniciar um desafio</strong>
          <p>
            <img src = "icons/level-up.svg" alt="levelup"/>
            Avance de level completando desafios.
          </p>
        </div>
        )
      }
    </div>
  )
}