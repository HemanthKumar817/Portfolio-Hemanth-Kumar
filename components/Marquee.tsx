import React from 'react';

const Marquee = () => {
    const styles = {
        container: {
            width: '100%',
            backgroundColor: '#FFE600',
            overflow: 'hidden',
            padding: '15px 0',
            whiteSpace: 'nowrap' as const,
            display: 'flex',
        },
        text: {
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem',
            color: '#000',
            animation: 'marquee 20s linear infinite',
            paddingRight: '50px',
            display: 'inline-block',
        },
    };

    const content = "AVAILABLE FOR WORK ★ OPEN TO PROJECTS ★ LET'S BUILD ★ DESIGN & CODE ★ ";

    return (
        <>
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
            <div style={styles.container}>
                <div style={styles.text}>
                    {content.repeat(10)}
                </div>
            </div>
        </>
    );
};

export default Marquee;
