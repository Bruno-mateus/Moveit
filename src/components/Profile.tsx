import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../style/components/Profile.module.css'

export function Profile(){
  const {level} = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src="https://www.cavzodiaco.com.br/images13/ikki_omega_76_0.jpg" alt="ikki"/>
    <div>
      <strong>Ikki de Fenix</strong>
      <p>
      <img src="icons/level.svg"alt="level"/>
        Level {level}
      </p>
    </div>
    </div>
  );
}