import React, { useState } from 'react';
import axios from 'axios';
import styles from './Contact.module.css'; 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('_replyto', email);
        formData.append('message', message);

        try {
            await axios.post('https://formspree.io/f/xdorkwwg', formData);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    };

    return (
        <div className={styles.contact}>
            <div className={styles.backgroundBlock}></div>
            <h1>Yhteystiedot</h1>
            <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:kasperijwork@gmail.com">kasperijwork@gmail.com</a>
                </div>
                <div className={styles.contactItem}>
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/Ka55u" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className={styles.contactItem}>
                    <i className="fab fa-github"></i>
                    <a href="https://gitlab.utu.fi/kujuut" target="_blank" rel="noreferrer">Gitlab</a>
                </div>
                <div className={styles.contactItem}>
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/kasperi-juutinen/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
            <h2>Tai lähetä viestiä</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nimi" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="_replyto" placeholder="Sähköposti" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="message" placeholder="Kirjoita tähän..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">{isSubmitted ? 'Lähetetty!' : 'Lähetä'}</button>
            </form>
        </div>
    );
}

export default Contact;
