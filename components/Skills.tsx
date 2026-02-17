import React, { useState } from 'react';

const Skills = () => {
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
        categoryContainer: {
            marginBottom: '50px',
        },
        categoryLabel: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem',
            marginBottom: '20px',
            borderBottom: '3px solid #000',
            display: 'inline-block',
            paddingBottom: '5px',
        },
        skillsGrid: {
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: '20px',
        },
    };

    const skillCategories = [
        {
            label: 'Frontend',
            items: ['React', 'Next.js', 'TypeScript', 'CSS/SCSS', 'WebGL', 'Framer Motion']
        },
        {
            label: 'Backend',
            items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Python', 'GraphQL']
        },
        {
            label: 'Design',
            items: ['Figma', 'UI/UX', 'Brutalism', '3D Modeling', 'Motion Design']
        }
    ];

    return (
        <section id="skills" style={styles.section}>
            <h2 style={styles.heading}>SKILLS</h2>

            {skillCategories.map((cat, index) => (
                <div key={index} style={styles.categoryContainer}>
                    <h3 style={styles.categoryLabel}>{cat.label}</h3>
                    <div style={styles.skillsGrid}>
                        {cat.items.map((skill) => (
                            <SkillTag key={skill} text={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

const SkillTag = ({ text }: { text: string }) => {
    const [hovered, setHovered] = useState(false);

    const style = {
        border: '3px solid #000',
        padding: '15px 30px',
        fontFamily: 'Courier Prime, monospace',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: hovered ? '#FFE600' : '#fff',
        cursor: 'default',
        transition: 'background-color 0.1s ease',
        boxShadow: hovered ? '5px 5px 0 #000' : 'none',
        transform: hovered ? 'translate(-2px, -2px)' : 'none',
    };

    return (
        <div
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text}
        </div>
    );
};

export default Skills;
