import React, { useState } from 'react';
import styles from './Home.module.css';
import TicTacToe from './components/TicTacToe';
import Confetti from 'react-confetti';

const HomePage = () => {
    const [showGame, setShowGame] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [confetti, setConfetti] = useState(false);

    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);
        if (clickCount >= 4) {
          if (showGame === false){
            setShowGame(true);
            setConfetti(true);
            setTimeout(() => setConfetti(false), 4000); // stop confetti after 2 seconds
            setClickCount(0);
          }else{
            setShowGame(false);
            setConfetti(false);
            setClickCount(0);
          }
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title} onClick={handleClick}>Kasperi Juutinen</h1>
                <h2 className={styles.subtitle}>Tietotekniikan opiskelija</h2>
            </header>

            <main className={styles.mainContent}>
                <p className={styles.description}>Tervetuloa sivuilleni!</p>
                {/* You can add more content here */}
            </main>

            <div className={showGame ? `${styles.tictactoe} ${styles.show}` : `${styles.tictactoe} ${styles.hide}`}>
                {confetti && <Confetti />}
                <TicTacToe />
            </div>
        </div>
    );
};

export default HomePage;
