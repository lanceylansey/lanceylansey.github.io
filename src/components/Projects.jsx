import SectionHeading from './SectionHeading.jsx'

const FEATURED = [
  {
    index: 'I',
    title: 'MOSMAGE Control Interface',
    dates: 'Jan 2026 — Present',
    description:
      'A React / React Flow web interface for automated genome engineering hardware. Node-based workflow editor with SQLite persistence, built alongside an interdisciplinary team spanning hardware and wet-lab.',
    stack: ['React', 'React Flow', 'SQLite'],
  },
  {
    index: 'II',
    title: 'MedChain Atlas (In Development)',
    dates: 'Personal project',
    description:
      'A multi-agent RAG system for synthesizing medical research literature. Agents are orchestrated with LangGraph across retrieval, synthesis, and summarization tasks, backed by Qdrant for vector search and PostgreSQL for relational storage. Served through a FastAPI backend and Next.js frontend, containerized with Docker Compose, and traced end-to-end with OpenTelemetry.',
    stack: ['LangGraph', 'Qdrant', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker Compose', 'OpenTelemetry'],
  },
]

const OTHER = [
  {
    title: 'Car Sales Website',
    dates: 'Mar — Apr 2026',
    description: 'Group leader on a PHP + MySQL dealership management app with dynamic sales reporting. Built for CPSC 3660 - Intro To Database Systems.',
    stack: ['PHP', 'MySQL'],
  },
  {
    title: 'Blackjack REST Game',
    dates: 'Feb — Apr 2025',
    description: 'RESTful API (GET/POST) over a C++ backend, with an HTML/CSS/JS client. Built for CPSC 3720 - Software Engineering.',
    stack: ['C++', 'REST', 'HTML/CSS/JS'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading index="03" title="Projects" />

        <div className="project-list">
          {FEATURED.map((p) => (
            <article className="project reveal" key={p.title}>
              <div className="project-index mono">{p.index}</div>
              <div className="project-body">
                <div className="project-head">
                  <h3>{p.title}</h3>
                  <span className="mono project-dates">{p.dates}</span>
                </div>
                <p>{p.description}</p>
                <div className="tag-row">
                  {p.stack.map((s) => (
                    <span className="tag mono" key={s}>{s}</span>
                  ))}
                </div>
                {p.github && (
                  <a className="project-link mono" href={p.github} target="_blank" rel="noreferrer">
                    View on GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="project-list project-list-minor">
          {OTHER.map((p) => (
            <article className="project project-minor reveal" key={p.title}>
              <div className="project-body">
                <div className="project-head">
                  <h3>{p.title}</h3>
                  <span className="mono project-dates">{p.dates}</span>
                </div>
                <p>{p.description}</p>
                <div className="tag-row">
                  {p.stack.map((s) => (
                    <span className="tag mono" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
