import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Auto Mart Pakistan",
    category: "Web Development",
    description: "A modern Pakistani car marketplace concept.",
    tags: ["React", "CSS", "Responsive"],
  },
  {
    title: "Task Manager",
    category: "Productivity",
    description: "A simple interface for organizing daily tasks.",
    tags: ["JavaScript", "UI Design"],
  },
  {
    title: "Creative Landing Page",
    category: "Web Design",
    description: "A stylish, responsive landing page for modern brands.",
    tags: ["HTML", "CSS", "React"],
  },
];

const skills = ["HTML5", "CSS3", "JavaScript", "React", "Git & GitHub"];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const visibleProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">hadi<span>.</span>dev</a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Projects", "Skills", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-button">Let's Talk ↗</a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-text">
            <p className="eyebrow">● AVAILABLE FOR PROJECTS</p>
            <h1>
              Turning ideas into
              <span> digital experiences.</span>
            </h1>
            <p className="description">
              Hi, I'm Hadi — a web developer who loves building
              modern, responsive and user-friendly websites.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <p className="location">Lahore, Pakistan · React · JavaScript</p>
          </div>

          <div className="code-card">
            <div className="code-header">
              <span>● ● ●</span>
              <span>developer.jsx</span>
            </div>
            <div className="code-content">
              <p><span className="purple">const</span> developer = {"{"}</p>
              <p className="indent">name: <span className="green">"Hadi"</span>,</p>
              <p className="indent">role: <span className="green">"Web Developer"</span>,</p>
              <p className="indent">skills: [</p>
              <p className="indent more"><span className="yellow">"React"</span>,</p>
              <p className="indent more"><span className="yellow">"JavaScript"</span></p>
              <p className="indent">],</p>
              <p className="indent">passion: <span className="green">"Creating"</span></p>
              <p>{"}"}</p>
            </div>
            <div className="code-footer">● All systems ready</div>
          </div>
        </section>

        <section className="tech-strip">
          <span>MY TECHNOLOGY STACK</span>
          {skills.map(skill => <b key={skill}>{skill}</b>)}
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Good design meets <span>good code.</span></h2>
          <p className="description">
            I turn creative ideas into useful digital experiences.
            My goal is to build websites that look professional,
            work smoothly and feel great on every screen. I keep
            learning and improving through practical projects.
          </p>
        </section>

        <section className="section projects" id="projects">
          <p className="eyebrow">MY PORTFOLIO</p>
          <h2>Things I've <span>been building.</span></h2>

          <div className="filters">
            {categories.map(category => (
              <button
                key={category}
                className={filter === category ? "filter active" : "filter"}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art art-${index}`}>
                  <span>0{index + 1}</span>
                  <div>{["⌘", "✓", "✳"][index]}</div>
                  <small>{project.category}</small>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Skills that bring ideas <span>to life.</span></h2>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>0{index + 1}</span>
                <h3>{skill}</h3>
                <p>Learning, building and improving.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">HAVE A PROJECT?</p>
            <h2>Let's build something <span>great.</span></h2>
            <p className="description">
              Have an idea for a website? Let's talk about it.
            </p>
          </div>
          <a
            className="primary-button"
            href="mailto:your-email@example.com?subject=Website%20Project"
          >
            Email Me ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">hadi<span>.</span>dev</a>
        <p>Built with React · Lahore, Pakistan</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}