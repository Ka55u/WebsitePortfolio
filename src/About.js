import React from 'react';
import styles from './About.module.css';

const About = () => {


    return (
        <div className={styles['about-container']}>
            <div className={styles['about-card']}>
                <h2>Henkilökohtaiset tiedot</h2>
                <p>Olen kolmannen vuoden korkeakouluopiskelija Turun Yliopistosta.
                    Olen täsmällinen ja tulen hyvin ihmisten kanssa toimeen.
                    Olen asenteeltani yleispositiivinen ja selviän hyvin ongelmatilanteista.
                    Työskentelen hyvin oma-aloitteisesti ja itsenäisesti, mutta omaan myös hyvät yhteistyötaidot.
                    Pyrin kehittämään taitojani aktiivisesti.
                </p>
            </div>
            <div className={styles['about-card']}>
                <h2>Opinnot</h2>
                <p>Opiskelen pääaineena tietotekniikkaa ja sivuaineena liiketoimintaa. (LITO) </p>
            </div>
            <div className={styles['about-card']}>
                <h2>Harrastukset</h2>
                <p>Vapaa-ajallani pelaan videopelejä, käyn kuntosalilla, pelaan padelia sekä ohjelmoin. Pidän myös lautapeleistä, sekä sekalaisesta urheilusta.</p>
            </div>
        </div>
    );
}

export default About;
