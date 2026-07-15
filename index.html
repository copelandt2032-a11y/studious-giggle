import { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./components/Experience";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Interactive Product",
    description:
      "A real-time product experience featuring responsive 3D animation.",
    tags: ["React", "Three.js", "GSAP"],
  },
  {
    number: "02",
    title: "Creative Platform",
    description:
      "A visual portfolio platform focused on motion and storytelling.",
    tags: ["WebGL", "UI/UX", "Animation"],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <span>{project.number}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

export default function App() {
  const progress = useRef(0);

  useLayoutEffect(() => {
    const animation = gsap.to(progress, {
      current: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".page",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <main className="page">
      <div className="canvas-container" aria-hidden="true">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0][0][8], fov: 45 }}
          gl={{ antialias: true, alpha: false }}
        >
          <Suspense fallback={null}>
            <Experience progress={progress} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <nav className="navigation" aria-label="Primary navigation">
        <a href="#home" className="logo">
          YOUR NAME
        </a>
        <a href="#contact">Let’s talk</a>
      </nav>

      <section id="home" className="panel hero">
        <div className="content">
          <p className="eyebrow">Creative developer · 2026</p>
          <h1>
            I build digital
            <br />
            <em>experiences.</em>
          </h1>
          <p className="intro">
            I combine thoughtful design, interaction, and real-time 3D to
            create memorable websites.
          </p>
          <a className="button" href="#about">
            Explore my work
          </a>
        </div>
      </section>

      <section id="about" className="panel align-right">
        <div className="content glass">
          <p className="eyebrow">About me</p>
          <h2>Design meets engineering.</h2>
          <p>
            I create accessible, responsive interfaces with React, animation,
            and WebGL. Replace this text with your background and the value you
            bring to clients or employers.
          </p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <header>
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="panel contact">
        <div className="content">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s create something memorable.</h2>
          <a className="email" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>
      </section>
    </main>
  );
}
