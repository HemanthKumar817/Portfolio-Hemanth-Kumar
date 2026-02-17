import React from 'react';

const About = () => {
    const styles = {
        section: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            minHeight: '600px',
        },
        leftCol: {
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative' as const,
            overflow: 'hidden',
        },
        stamp: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '8rem',
            transform: 'rotate(-45deg)',
            border: '10px solid #fff',
            padding: '20px',
            opacity: 0.8,
        },
        rightCol: {
            backgroundColor: '#fff',
            padding: '80px',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center',
        },
        bio: {
            fontFamily: 'Courier Prime, monospace',
            fontSize: '1.5rem',
            lineHeight: '1.6',
            marginBottom: '40px',
        },
        divider: {
            height: '5px',
            backgroundColor: '#FF2200', // Danger red
            width: '100px',
            marginBottom: '40px',
        },
        highlight: {
            backgroundColor: '#FFE600',
            padding: '0 5px',
            fontWeight: 'bold',
        }
    };

    return (
        <section id="about" className="about-grid">
            <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          minHeight: 600px;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
            <div style={styles.leftCol}>
                <div style={styles.stamp}>ABOUT</div>
            </div>
            <div style={styles.rightCol}>
                <div style={styles.divider}></div>
                <p style={styles.bio}>
                    I am Hemanth Kumar, a <span style={styles.highlight}>Designer & Developer</span> obsessed with building loud, memorable digital experiences.
                    <br /><br />
                    I don't just write code; I craft systems that demand attention.
                    My work blends raw aesthetics with robust engineering, creating
                    interfaces that feel physically present on the screen.
                    <br /><br />
                    Currently open for new opportunities to build something bold.
                </p>
            </div>
        </section>
    );
};

export default About;
