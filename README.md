# Hemanth Kumar - Digital Portfolio

A high-performance, immersive digital portfolio built with the latest web technologies. This project demonstrates advanced UI/UX engineering, featuring real-time fluid simulations, reactive animations, and a highly optimized React architecture.

![Portfolio Preview](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200)

## 🚀 Key Features

-   **Immersive Fluid Simulation**: Powered by Custom WebGL & Three.js, the background features a `LiquidEther` simulation that responds to mouse movement with fluid dynamics.
-   **High-Performance Rendering**: Optimized with `requestAnimationFrame` for scroll events and thorough WebGL resource disposal to prevent memory leaks.
-   **Dynamic Theming**: A global color system controlled by a custom **Hue Wheel Picker** that instantly updates accents, glows, and borders across the app.
-   **Interactive Elements**:
    -   **Magnetic Cursor**: A custom GSAP-driven cursor with lag-free tracking and parallax effects.
    -   **StarBorder**: A shader-like glowing border effect for high-emphasis UI elements.
    -   **Flowing Menu**: A smooth, marquee-style navigation menu.
-   **Responsive Design**: Mobile-first architecture ensuring smooth experiences across all devices.

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

-   `src/components`: Reusable UI and 3D components (`LiquidEther`, `FlowingMenu`, etc.).
-   `src/constants.ts`: centralized configuration for presets, skills, and project data.
-   `src/App.tsx`: Main application entry point handling routing and layout.
-   `vite.config.ts`: Custom build configuration with manual chunk splitting.

## 📧 Contact

**Hemanth Kumar** - AI Developer
-   **Email**: [hemanthtangudu817@gmail.com](mailto:hemanthtangudu817@gmail.com)
-   **LinkedIn**: [Hemanth Kumar](https://www.linkedin.com/in/tangudu-hemanth-kumar-25855229a/)

---
&copy; 2025 Hemanth Kumar. All Rights Reserved.
