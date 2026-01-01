import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;

        // Mouse position
        let mouseX = 0;
        let mouseY = 0;

        // Current cursor position (for smooth lag)
        let cursorX = 0;
        let cursorY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Dot moves instantly
            if (dot) {
                dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            }
        };

        const onMouseDown = () => {
            if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(0.8)`;
        };

        const onMouseUp = () => {
            if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(1)`;
        };

        const addHoverListeners = () => {
            const clickableElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer, [role="button"]');
            clickableElements.forEach(el => {
                el.addEventListener('mouseenter', () => setIsHovered(true));
                el.addEventListener('mouseleave', () => setIsHovered(false));
            });
        };

        // Smooth animation loop
        const animate = () => {
            // Linear interpolation (lerp) for smooth following
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            if (cursor) {
                cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
            }

            requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        // Initial listeners
        addHoverListeners();

        // Re-add listeners periodically for dynamic content (simple mutation observer alternative)
        const interval = setInterval(addHoverListeners, 1000);

        const animationId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            clearInterval(interval);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
            />
            <div
                ref={dotRef}
                className="custom-cursor-dot"
            />
        </>
    );
};

export default CustomCursor;
