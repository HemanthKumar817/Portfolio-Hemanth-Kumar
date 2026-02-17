import React, { useState } from 'react';

const projectsData = [
    {
        title: 'Placement Prime',
        description: 'An Intelligent System for ATS-Compliant Resume Generation and Personalized Interview Preparation.',
        tech: 'Full Stack',
        link: 'https://github.com/HemanthKumar817/Placement-Prime'
    },
    {
        title: 'Food Delivery',
        description: 'A Full Stack E-commerce platform with brutalist vibes.',
        tech: 'Full Stack',
        link: 'https://github.com/HemanthKumar817/Food-Delivery'
    },
    {
        title: 'PlantAi Disease Classifier',
        description: 'A Machine Learning model for disease classification.',
        tech: 'Python',
        link: 'https://github.com/HemanthKumar817/PlantAi_disease_classifier'
    },
];

const Projects = () => {
    const styles = {
        section: {
            padding: '100px 40px',
            backgroundColor: '#fff',
        },
        heading: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '5rem',
            marginBottom: '60px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
        },
    };

    return (
        <section id="projects" style={styles.section}>
            <h2 style={styles.heading}>PROJECTS</h2>
            <div style={styles.grid}>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

interface Project {
    title: string;
    description: string;
    tech: string;
    link: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [hovered, setHovered] = useState(false);

    const styles = {
        card: {
            border: '5px solid #000',
            backgroundColor: '#fff',
            padding: '30px',
            boxShadow: hovered ? '10px 10px 0 #000' : '6px 6px 0 #000',
            transform: hovered ? 'translate(-4px, -4px)' : 'translate(0, 0)',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '20px',
            height: '100%',
            textDecoration: 'none',
            color: 'inherit',
        },
        title: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2.5rem',
            margin: 0,
        },
        desc: {
            fontFamily: 'Courier Prime, monospace',
            fontSize: '1rem',
            lineHeight: '1.5',
            flexGrow: 1,
        },
        tag: {
            display: 'inline-block',
            backgroundColor: '#FF2200', // Danger red
            color: '#fff',
            padding: '5px 10px',
            fontFamily: 'Courier Prime, monospace',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            border: '3px solid #000',
            width: 'fit-content',
        },
        link: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.2rem',
            textDecoration: 'underline',
            textAlign: 'right' as const,
            marginTop: '10px',
        }
    };

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={styles.tag}>{project.tech}</div>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.description}</p>
            <div style={styles.link}>VIEW →</div>
        </a>
    );
};

export default Projects;
