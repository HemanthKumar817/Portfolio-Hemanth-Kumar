import React from 'react';

const Quote = () => {
    const styles = {
        section: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '100px 40px',
            textAlign: 'center' as const,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '40vh',
        },
        text: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 6rem)', // Responsive font size
            lineHeight: '1.1',
            textTransform: 'uppercase' as const,
            maxWidth: '1200px',
        },
        highlight: {
            color: '#FFE600',
        }
    };

    return (
        <section style={styles.section}>
            <blockquote style={styles.text}>
                "Crafting <span style={styles.highlight}>Tomorrow</span> <br /> Inspired By <span style={styles.highlight}>Past</span>"
            </blockquote>
        </section>
    );
};

export default Quote;
