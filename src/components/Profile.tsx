import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../style/components/Profile.module.css'

export function Profile(){
  const {level} = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src="icons/profile.svg" alt="ikki"/>
    <div>
      <strong>User</strong>
      <p>
      <img src="icons/level.svg"alt="level"/>
        Level {level}
      </p>
    </div>
    </div>
  );
}