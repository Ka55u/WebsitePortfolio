import React, { useEffect } from 'react';
import styles from './About.module.css';

const About = () => {


    return (
        <div className={styles['about-container']}>
            <div className={styles['about-card']}>
                <h2>Henkilökohtaiset tiedot</h2>
                <p>Olen kolmannen vuoden korkeakouluopiskelija Turun Yliopistosta.
                    Olen täsmällinen työssäni ja tulen hyvin ihmisten kanssa toimeen.
                    Olen asenteeltani yleispositiivinen ja selviän hyvin ongelmatilanteista.
                </p>
            </div>
            <div className={styles['about-card']}>
                <h2>Opinnot</h2>
                <p>Information about your education.</p>
            </div>
            <div className={styles['about-card']}>
                <h2>Harrastukset</h2>
                <p>Information about your hobbies.</p>
            </div>
        </div>
    );
}

export default About;
