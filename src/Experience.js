import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      company: "Nclean",
      role: "Huonesiivoaja",
      duration: "Toukokuu 2021 - Elokuu 2021",
      description: [
        "Huoneiden siivous ja kuntoon laitto",
        "Asiakkaiden palveleminen",
      ],
    },
    {
        company: "Live Exit Games",
        role: "Pakohuoneohjaaja",
        duration: "Heinäkuu 2023 -",
        description: [
          "Pakohuoneen ohjaaminen",
          "Asiakkaiden palveleminen",
          "Tilojen ylläpito ja pyörittäminen"
        ],
      },
    // ... more experiences
  ];

  return (
    <div>
      <section>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experience}>
            <h2>{exp.role} - {exp.company}</h2>
            <p className={styles.duration}>{exp.duration}</p>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
