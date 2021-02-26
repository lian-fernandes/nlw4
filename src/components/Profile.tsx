import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://www.treehugger.com/thmb/Vl5IAxypuNR_igpm7Uhl7q2-ks8=/2136x1403/filters:fill(auto,1)/yellow-mongoose-portrait-01-4873d2399cb54ea48448b0bda37bda1e.jpg" alt="Pepega"/>
            <div>
                <strong>Bixin</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}    
                </p>
            </div>
        </div>
    );
}
