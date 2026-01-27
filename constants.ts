
export interface Preset {
    name: string;
    mouseForce: number;
    viscous: number;
    resolution: number;
    cursorSize: number;
    autoSpeed: number;
    isViscous: boolean;
    autoIntensity: number;
    description: string;
}

export const PRESETS: Preset[] = [
    {
        name: 'Balanced',
        description: 'A harmonious blend of reactive force and smooth viscosity.',
        mouseForce: 25,
        viscous: 40,
        resolution: 0.4,
        cursorSize: 110,
        autoSpeed: 0.8,
        isViscous: true,
        autoIntensity: 3.0
    },
    {
        name: 'Nebula',
        description: 'Slow, cosmic drifts with high inertia and large impact zones.',
        mouseForce: 15,
        viscous: 100,
        resolution: 0.5,
        cursorSize: 180,
        autoSpeed: 0.4,
        isViscous: true,
        autoIntensity: 2.0
    },
    {
        name: 'Velocity',
        description: 'High-speed, low-friction response for rapid interactions.',
        mouseForce: 65,
        viscous: 10,
        resolution: 0.6,
        cursorSize: 80,
        autoSpeed: 1.8,
        isViscous: true,
        autoIntensity: 5.0
    },
    {
        name: 'Heavy Oil',
        description: 'Dense, sluggish physics that linger long after movement.',
        mouseForce: 10,
        viscous: 250,
        resolution: 0.35,
        cursorSize: 250,
        autoSpeed: 0.2,
        isViscous: true,
        autoIntensity: 1.5
    },
    {
        name: 'Quantum',
        description: 'Ghostly, non-viscous particles that ripple instantly.',
        mouseForce: 45,
        viscous: 5,
        resolution: 0.7,
        cursorSize: 60,
        autoSpeed: 2.5,
        isViscous: false,
        autoIntensity: 4.0
    },
];

export const SKILL_ITEMS = [
    { link: '#', text: 'Creative Coding', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' }, // Cyberpunk/Code abstract
    { link: '#', text: 'UX Strategy', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600' }, // Wireframing/Design
    { link: '#', text: '3D Interactions', image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=600' }, // 3D Shapes/Abstract
    { link: '#', text: 'AI Design', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600' }  // AI Brain/Nodes
];

export const PROJECT_ITEMS = [
    { id: 1, title: 'AI Code Review Bot', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/AI-Code-Review-Bot', className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/40 to-black/40' },
    { id: 2, title: 'AI PDF Chatbot', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/ai-pdf-chatbot-langchain', className: 'md:col-span-1 md:row-span-1' },
    { id: 3, title: 'Custom AI Agent', category: 'Python', year: '2025', link: 'https://github.com/HemanthKumar817/Custom-AI-Agent-with-Memory', className: 'md:col-span-1 md:row-span-1' },
    { id: 4, title: 'Food Delivery', category: 'JavaScript', year: '2025', link: 'https://github.com/HemanthKumar817/Food-Delivery', className: 'md:col-span-2 md:row-span-1' },
    { id: 5, title: 'Placement Prime', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/Placement-Prime', className: 'md:col-span-1 md:row-span-1' },
    { id: 6, title: 'Portfolio', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/Portfolio-Hemanth-Kumar', className: 'md:col-span-1 md:row-span-1' }
];

export const DEFAULT_PALETTES = [
    ['#5227FF', '#FF9FFC', '#B19EEF'],
    ['#00C9FF', '#92FE9D', '#00f2fe'],
    ['#f83600', '#f9d423', '#ee0979'],
];
