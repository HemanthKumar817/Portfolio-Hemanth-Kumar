# Hemanth Kumar - Digital Portfolio

A high-performance, immersive digital portfolio built with the latest web technologies. This project demonstrates advanced UI/UX engineering, featuring real-time fluid simulations, reactive animations, and a highly optimized React architecture.

![Portfolio Preview](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200)

## 🚀 Key Features

-   **Brutalist Design Philosophy**: A bold, high-contrast aesthetic featuring raw borders, large typography, and a strict black/white/yellow/red color palette.
-   **Interactive Hero Section**: Features GSAP-powered text reveals and mouse-movement parallax effects for an engaging first impression.
-   **Curated Project Showcase**: A clean, grid-based layout displaying key projects with hover effects and direct GitHub links.
-   **"Quote" Section**: A dedicated typographic section ("Crafting Tomorrow Inspired By Past") serving as a visual break and statement piece.
-   **Responsive Layouts**: Fully responsive design ensuring a seamless experience across desktop, tablet, and mobile devices.
-   **High-Performance Animations**: Optimized animations using GSAP and CSS transitions for smooth interactivity.

## 🛠️ Technology Stack

-   **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
-   **3D & Graphics**: [Three.js](https://threejs.org/), Custom GLSL Shaders
-   **Animations**: [GSAP (GreenSock)](https://gsap.com/)
-   **Styling**: [TailwindCSS](https://tailwindcss.com/)
-   **UI Components**: [Ark UI](https://ark-ui.com/), [Lucide React](https://lucide.dev/)

## ⚡ Performance Optimizations

This project adheres to strict performance best practices:
-   **Manual Chunking**: Vendor libraries (`three`, `gsap`, `react`) are split into separate chunks for optimal caching.
-   **Event Throttling**: Scroll listeners are decoupled from the main thread using `requestAnimationFrame`.
-   **Memory Safety**: All WebGL contexts and Three.js geometries are explicitly disposed of significantly reducing memory footprint during navigation.
-   **Data Isolation**: Static data is separated into `constants.ts` to keep components lightweight.

## 📦 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/HemanthKumar817/Portfolio-Hemanth-Kumar.git
    cd hemanth-kumar-_-digital-portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

-   `src/components`:
    -   `Hero.tsx`: Interactive landing section with GSAP animations.
    -   `Quote.tsx`: Typographic statement section.
    -   `Marquee.tsx`: Infinite scrolling text loop.
    -   `Projects.tsx`: Grid display of portfolio projects.
    -   `Skills.tsx`: Categorized skills display.
    -   `About.tsx`: Personal bio and introduction.
    -   `ContactFooter.tsx`: Interactive footer with social links.
-   `src/App.tsx`: Main application entry point composing the portfolio sections.
-   `vite.config.ts`: Vite build configuration.

## 📧 Contact

**Hemanth Kumar** - AI Developer
-   **Email**: [hemanthtangudu817@gmail.com](mailto:hemanthtangudu817@gmail.com)
-   **LinkedIn**: [Hemanth Kumar](https://www.linkedin.com/in/tangudu-hemanth-kumar-25855229a/)

---
&copy; 2025 Hemanth Kumar. All Rights Reserved.
