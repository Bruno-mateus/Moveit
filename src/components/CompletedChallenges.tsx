import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../style/components/CompletedChallenges.module.css'

export function CompletedChallenges (){
  const { challengesCompleted }= useContext(ChallengesContext);
    return(
      <div className={styles.CompletedChallengesContainer}>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
      </div>
    )
}