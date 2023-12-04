import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './skills.module.css';

const SkillCard = ({ skill }) => (
  <Card className={`${styles['skill-card']} ${styles['level-' + skill.level]} ${styles['size-' + skill.level]}`}>
    <Card.Body>
      <Card.Title>{skill.name}</Card.Title>
      <Card.Text>{skill.levelText}</Card.Text>
    </Card.Body>
  </Card>
);

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'expert', levelText: 'Expert' },
    { name: 'Python', level: 'expert', levelText: 'Expert' },
    { name: 'React', level: 'proficient', levelText: 'Proficient' },
    { name: 'CSS', level: 'proficient', levelText: 'Proficient' },
    { name: 'Project Management', level: 'competent', levelText: 'Competent' },
    { name: 'Communication', level: 'expert', levelText: 'Expert' },
    { name: 'Team Leadership', level: 'proficient', levelText: 'Proficient' },
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
