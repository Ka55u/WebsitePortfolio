import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Projects.module.css';
import githubLogo from './images/gh.png'; 
import placeholderImage from './images/placeholderimage.png'; 


const ProjectCard = ({ project }) => {

  const imageUrl = project.image || placeholderImage;
  return (
    <Card className={styles['custom-card']} style={{ width: '30rem', margin: '10px' }}>
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        style={{ 
          maxWidth: '150px', 
          maxHeight: '150px', 
          objectFit: 'cover',
          margin: 'auto' 
        }} 
      />
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
      name: 'KideScrapeBot',
      description: 'Bot made for getting tickets off the kide.app website',
      image: '',
      link: 'https://github.com/Ka55u/KideScrapeBot',
    },
    {
      name: 'PortfolioWebsite',
      description: 'The code for this website',
      image: '',
      link: 'https://www.github.com/example2',
    },
    // More projects here
  ];

  const reversedProjects = [...projects].reverse();


  return (
    <div className={styles.Projects} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {reversedProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
