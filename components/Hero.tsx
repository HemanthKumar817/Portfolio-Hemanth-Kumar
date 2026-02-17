import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const nameRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial reveal animation
            gsap.fromTo(nameRef.current,
                { y: 100, opacity: 0, rotate: 5 },
                { y: 0, opacity: 1, rotate: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
            );

            // Mouse movement effect
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 20; // -10 to 10
                const y = (clientY / window.innerHeight - 0.5) * 20; // -10 to 10

                gsap.to(nameRef.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center',
            alignItems: 'center',
            padding: '120px 20px 60px', // Top padding for fixed navbar
            textAlign: 'center' as const,
            backgroundColor: '#fff',
            overflow: 'hidden',
        },
        nameContainer: {
            borderTop: '5px solid #000',
            borderBottom: '5px solid #000',
            width: '100%',
            padding: '20px 0',
            marginBottom: '30px',
            overflow: 'hidden', // Mask for reveal
        },
        name: {
            fontSize: '10vw',
            fontFamily: 'Bebas Neue, sans-serif',
            lineHeight: '0.9',
            margin: 0,
            display: 'inline-block',
            willChange: 'transform, opacity',
        },
        tagline: {
            fontFamily: 'Courier Prime, monospace',
            fontStyle: 'italic',
            fontSize: '1.5rem',
            marginBottom: '50px',
        },
        buttonContainer: {
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap' as const,
        },
    };

    return (
        <section style={styles.section} id="hero" ref={containerRef}>
            <div style={styles.nameContainer}>
                <h1 style={styles.name} ref={nameRef}>HEMANTH KUMAR</h1>
            </div>
            <p style={styles.tagline}>Designer & Developer // Building Loud Things</p>

            <div style={styles.buttonContainer}>
                <BrutalButton text="VIEW WORK" variant="primary" link="#projects" />
                <BrutalButton text="CONTACT ME" variant="secondary" link="#contact" />
            </div>
        </section>
    );
};

const BrutalButton = ({ text, variant, link }: { text: string; variant: 'primary' | 'secondary'; link: string }) => {
    const [hovered, setHovered] = useState(false);

    const baseStyle = {
        display: 'inline-block',
        padding: '15px 40px',
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '1.5rem',
        textDecoration: 'none',
        color: '#000',
        border: '5px solid #000',
        backgroundColor: variant === 'primary' ? '#FFE600' : '#FFF',
        boxShadow: hovered ? '9px 9px 0 #000' : '6px 6px 0 #000',
        transform: hovered ? 'translate(-3px, -3px)' : 'translate(0, 0)',
        transition: 'all 0.1s ease',
        cursor: 'pointer',
    };

    return (
        <a
            href={link}
            style={baseStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text}
        </a>
    );
};

export default Hero;
