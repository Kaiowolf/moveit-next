import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/LevelUpModal.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return(
    <div className={styles.overlay}>
    <div className={styles.container}>
      <header>{level}</header>

      <strong>Parabéns</strong>
      <p>Você alcançou um novo level.</p>

      <button type='button' onClick={closeLevelUpModal}>
        <FontAwesomeIcon icon={faTimes} className={styles.iconTimes} />
      </button>
    </div>
    </div>
  )
}