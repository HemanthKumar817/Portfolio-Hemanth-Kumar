import React, { useState } from 'react';

const SocialButton = ({ text, link }: { text: string; link: string }) => {
    const [hovered, setHovered] = useState(false);

    const style = {
        display: 'inline-block',
        padding: '20px 40px',
        border: '3px solid #fff',
        color: hovered ? '#000' : '#fff',
        backgroundColor: hovered ? '#fff' : '#000',
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '1.5rem',
        textDecoration: 'none',
        boxShadow: hovered ? '6px 6px 0 #FFE600' : '6px 6px 0 #333',
        transform: hovered ? 'translate(-3px, -3px)' : 'none',
        transition: 'all 0.2s ease',
    };

    return (
        <a
            href={link}
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text}
        </a>
    );
};

const ContactFooter = () => {
    const styles = {
        section: {
            backgroundColor: '#FF0000',
            color: '#fff',
            padding: '100px 40px',
            textAlign: 'center' as const,
        },
        heading: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '6rem',
            color: '#FFE600',
            marginBottom: '40px',
            lineHeight: 1,
        },
        email: {
            fontFamily: 'Courier Prime, monospace',
            fontSize: '2rem',
            color: '#fff',
            textDecoration: 'none',
            marginBottom: '60px',
            display: 'block',
        },
        socials: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap' as const,
        },
        footerBottom: {
            marginTop: '100px',
            fontFamily: 'Courier Prime, monospace',
            fontSize: '0.8rem',
            color: '#666',
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <h2 style={styles.heading}>LET'S WORK TOGETHER</h2>
            <a href="mailto:tanguduhemathkumar@gmail.com" style={styles.email}>tanguduhemathkumar@gmail.com</a>

            <div style={styles.socials}>
                <SocialButton text="LINKEDIN" link="https://www.linkedin.com/in/tangudu-hemanth-kumar-25855229a/" />
                <SocialButton text="GITHUB" link="https://github.com/HemanthKumar817" />
            </div>

            <div style={styles.footerBottom}>
                &copy; 2026 HEMANTH KUMAR. DESIGNED WITH RAW POWER.
            </div>
        </section>
    );
};

export default ContactFooter;
