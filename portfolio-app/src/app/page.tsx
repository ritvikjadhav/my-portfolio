
"use client";

const projects = [
  {
    number: "01",
    name: "VelType",
    subtitle: "Online Typing Platform",
    description:
      "An interactive typing platform with structured lessons and WPM tests to improve typing speed and accuracy.",
    tags: "HTML · CSS · JAVASCRIPT",
    link: "https://veltype.vercel.app",
    type: "finance",
  },
  {
    number: "02",
    name: "Bizvero",
    subtitle: "Digital Business Platform",
    description:
      "Helping small businesses grow digitally through online product catalogues, digital storefronts and optional buying features.",
    tags: "HTML · CSS · JAVASCRIPT · SUPABASE",
    link: "https://bizvero.vercel.app",
    type: "brand",
  },
  {
    number: "03",
    name: "Coming Soon",
    subtitle: "The Next Creation",
    description:
      "Exploring new ideas, learning modern technologies and building more useful digital experiences.",
    tags: "MORE PROJECTS IN PROGRESS",
    link: "#contact",
    type: "mobile",
  },
];

const capabilities = [
  {
    icon: "◇",
    title: "FRONTEND DEVELOPMENT",
    description: "Building responsive and interactive interfaces using modern web technologies.",
  },
  {
    icon: "▣",
    title: "WEB DEVELOPMENT",
    description: "Creating clean, functional and user-friendly websites for the web.",
  },
  {
    icon: "✧",
    title: "UI IMPLEMENTATION",
    description: "Turning design concepts into attractive and consistent web experiences.",
  },
  {
    icon: "⌘",
    title: "BACKEND INTEGRATION",
    description: "Connecting applications with databases and backend services.",
  },
  {
    icon: "▱",
    title: "RESPONSIVE DESIGN",
    description: "Making websites work smoothly across mobile, tablet and desktop.",
  },
  {
    icon: "⬡",
    title: "PROBLEM SOLVING",
    description: "Writing organised code and solving practical development challenges.",
  },
];

const technologies = [
  ["5", "HTML5"],
  ["3", "CSS3"],
  ["JS", "JavaScript"],
  ["S", "Supabase"],
  ["G", "Git & GitHub"],
  ["N", "Next.js"],
];

const process = [
  {
    number: "01",
    title: "IDEA",
    description: "Understanding the purpose and planning the project.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "PLAN",
    description: "Structuring the layout, features and user experience.",
    icon: "◎",
  },
  {
    number: "03",
    title: "DEVELOP",
    description: "Writing clean code and building the website.",
    icon: "⌘",
  },
  {
    number: "04",
    title: "TEST",
    description: "Checking responsiveness, functionality and performance.",
    icon: "</>",
  },
  {
    number: "05",
    title: "DEPLOY",
    description: "Launching the project and making it available online.",
    icon: "↗",
  },
];

export default function Home() {
  return (
    <main className="portfolio" id="top">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#top" className="logo">RS</a>

        <nav className="nav-links">
          <a href="#work">WORK</a>
          <a href="#capabilities">CAPABILITIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
          <a href="#contact" className="talk-button">
            LET'S TALK ↗
          </a>
        </nav>

        <a href="#work" className="mobile-menu" aria-label="View projects">
          ☰
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="about">

        <div className="hero-copy">
          <p className="eyebrow">
            BUILDING DIGITAL EXPERIENCES THAT MATTER
          </p>

          <h1 className="hero-title">
            WEB
            <br />
            DEVELOPER
          </h1>

          <p className="hero-description">
            I build modern, responsive and user-friendly websites
            that combine creative design, clean code and technology.
          </p>

          <div className="hero-actions">
            <a href="#work" className="light-button">
              VIEW MY WORK ↗
            </a>

            <a href="#contact" className="download-link">
              LET'S CONNECT ↗
            </a>
          </div>
        </div>

        <div className="portrait-area">
          <div className="portrait-ring"></div>

          <div className="portrait-placeholder">
            <span>RS</span>
          </div>

          <div className="portrait-star">✦</div>

          <div className="availability">
            <span>FOCUSED ON</span>
            <strong>BUILDING</strong>
            <span>DIGITAL EXPERIENCES ↗</span>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats">

        <div className="stat">
          <span>✧</span>
          <strong>02+</strong>
          <span>PROJECTS BUILT</span>
        </div>

        <div className="stat">
          <span>◎</span>
          <strong>02</strong>
          <span>LIVE DEPLOYMENTS</span>
        </div>

        <div className="stat">
          <span>⌘</span>
          <strong>04+</strong>
          <span>TECHNOLOGIES USED</span>
        </div>

        <div className="stat">
          <span>∞</span>
          <strong>∞</strong>
          <span>ALWAYS LEARNING</span>
        </div>

      </section>

      {/* FEATURED WORK */}
      <section className="section" id="work">

        <div className="section-top">
          <h2 className="section-heading">FEATURED WORK</h2>
          <a href="#work" className="small-link">
            SELECTED PROJECTS ↗
          </a>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className={`project-preview ${project.type}`}>

                {project.type === "finance" && (
                  <div className="dashboard">
                    <span>VELTYPE / TYPING TEST</span>
                    <strong>WPM TEST</strong>
                    <span>Improve your typing speed</span>
                    <div className="chart-bars">
                      {[35, 55, 45, 75, 60, 90, 80].map((height, i) => (
                        <i key={i} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                )}

                {project.type === "brand" && (
                  <div className="brand-preview">
                    <span>BIZVERO / DIGITAL STOREFRONT</span>
                    <strong>GROW YOUR<br />BUSINESS.</strong>
                    <div className="abstract-shape"></div>
                  </div>
                )}

                {project.type === "mobile" && (
                  <div className="phone-preview">
                    <span>RS / NEXT PROJECT</span>
                    <strong>NEW<br />IDEAS.</strong>
                    <div className="phone-circle"></div>
                    <span>COMING SOON</span>
                  </div>
                )}

              </div>

              <div className="project-info">
                <div>
                  <span className="project-number">
                    PROJECT {project.number}
                  </span>

                  <h3>{project.name}</h3>

                  <p>{project.subtitle}</p>

                  <span className="project-tags">
                    {project.tags}
                  </span>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="round-arrow"
                  aria-label={`View ${project.name}`}
                >
                  ↗
                </a>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* CAPABILITIES AND TECHNOLOGIES */}
      <section className="skills-layout" id="capabilities">

        <div className="capabilities">
          <h2 className="section-heading">CORE CAPABILITIES</h2>

          <div className="capability-grid">

            {capabilities.map((item) => (
              <div className="capability" key={item.title}>
                <span style={{ fontSize: "28px", minWidth: "30px" }}>
                  {item.icon}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="right-skills">

          <div>
            <h2 className="section-heading">TOOLS & TECHNOLOGIES</h2>

            <div className="technology-panel">

              {technologies.map(([icon, name]) => (
                <div className="technology" key={name}>
                  <span>{icon}</span>
                  <p>{name}</p>
                </div>
              ))}

            </div>
          </div>

          <div>
            <h2 className="section-heading">
              LEARNING & DEVELOPMENT
            </h2>

            <div className="education-panel">
              <div>
                <span className="education-icon">01</span>
                <p>
                  <strong>Practical Project Development</strong>
                  <br />
                  Building and deploying real-world web applications
                </p>
              </div>

              <div>
                <span className="education-icon">02</span>
                <p>
                  <strong>Continuous Learning</strong>
                  <br />
                  Exploring modern web technologies and development
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="process-section">

        <h2 className="section-heading">MY DEVELOPMENT PROCESS</h2>

        <div className="process-panel">

          {process.map((step) => (
            <div className="process-step" key={step.number}>
              <span>
                {step.number} &nbsp; {step.title}
              </span>

              <p>{step.description}</p>

              <span style={{ fontSize: "25px" }}>
                {step.icon}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-panel" id="contact">

        <div className="contact-title">
          LET'S BUILD<br />
          SOMETHING<br />
          EXTRAORDINARY
        </div>

        <div className="contact-middle">
          <p>
            I'm always interested in learning,
            building new projects and connecting
            with people who have great ideas.
          </p>

          <a href="mailto:your-email@example.com" className="light-button">
            LET'S WORK TOGETHER ↗
          </a>
        </div>

        <div className="contact-details">
          <p>✉ &nbsp; your-email@example.com</p>
          <p>⌘ &nbsp; Web Developer</p>
          <p>◎ &nbsp; Available for opportunities</p>
          <p>↗ &nbsp; Remote / Worldwide</p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <span>© 2026 RS. ALL RIGHTS RESERVED.</span>

        <div>
          <a href="#contact">LET'S CONNECT</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a href="#top">BACK TO TOP ↑</a>
        </div>

      </footer>

    </main>
  );
}
