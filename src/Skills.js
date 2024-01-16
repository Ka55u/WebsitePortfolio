import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './skills.module.css';

const SkillCard = ({ skill }) => (
  <Card className={`${styles['skill-card']} ${styles['level-' + skill.level]} ${styles['size-' + skill.level]}`}>
    <Card.Body>
      <Card.Title>{skill.name}</Card.Title>
    </Card.Body>
  </Card>
);

function Skills() {
  const skills = [
    { name: 'JavaScript', level: '4'},
    { name: 'Python', level: '4'},
    { name: 'React', level: '3'},
    { name: 'CSS', level: '3'},
    {name: 'Java', level: '4'},
    // Add more skills here
  ];

  return (
    <div className={styles.Skills} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
}

export default Skills;
