import React, { useState } from 'react';

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const links = ['About', 'Projects', 'Skills', 'Contact'];

    const styles = {
        nav: {
            position: 'fixed' as const,
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            borderBottom: '5px solid #000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            zIndex: 1000,
        },
        logo: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
        },
        linkContainer: {
            display: 'flex',
            gap: '40px',
        },
        link: (isHovered: boolean) => ({
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.2rem',
            color: '#000',
            textDecoration: 'none',
            position: 'relative' as const,
            cursor: 'pointer',
            boxShadow: isHovered ? 'inset 0 -10px 0 #FFE600' : 'none',
            transition: 'box-shadow 0.2s ease',
        }),
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>HK</div>
            <div style={styles.linkContainer}>
                {links.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        style={styles.link(hoveredLink === link)}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
