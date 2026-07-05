import SectionHeading from './SectionHeading.jsx'

const GROUPS = [
  ['Languages', ['C++', 'Python', 'HTML/CSS', 'JavaScript']],
  ['Tools', ['Git', 'GitHub', 'VSCode', 'Cursor', 'PyCharm', 'npm']],
  ['Frameworks / Libs', ['React', 'React Flow', 'FastAPI', 'LangGraph', 'Next.js']],
  ['Databases', ['SQLite', 'PostgreSQL', 'Qdrant']],
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading index="02" title="Skills" />
        <div className="skills-grid">
          {GROUPS.map(([label, items]) => (
            <div className="skills-col reveal" key={label}>
              <span className="mono eyebrow">{label}</span>
              <ul className="skills-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
