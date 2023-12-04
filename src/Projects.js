import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Projects.module.css';
import githubLogo from './images/gh.png'; // replace this with the path to your GitHub logo

const ProjectCard = ({ project }) => {
  return (
    <Card className={styles['custom-card']} style={{ width: '30rem', margin: '10px' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}}>
          <a href={project.link}>
            <img src={githubLogo} alt="Github logo" style={{width: '40px', height: '40px'}} />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  const projects = [
    {
      name: 'Project 1',
      description: 'This is a description for Project 1',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.github.com/example1',
    },
    {
      name: 'Project 2',
      description: 'This is a description for Project 2',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.github.com/example2',
    },
    // More projects here
  ];

  return (
    <div className={styles.Projects} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
