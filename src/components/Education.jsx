import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHeading index="05" title="Education" />
        <div className="row-list">
          <article className="row-item reveal">
            <div className="row-head">
              <h3>BSc Computer Science</h3>
              <span className="mono project-dates">Sept 2023 — Spring 2027 (expected)</span>
            </div>
            <p>University of Lethbridge</p>
            <p className="row-item-detail">
              GPA 3.65 · Dean&apos;s List · Spring 2024, Spring 2025
            </p>
            <span className="mono eyebrow row-item-eyebrow">Relevant Coursework</span>
            <div className="tag-row">
              {['Computer Architecture', 'Data Structures & Algorithms', 'Intro to Software Engineering', 'Intro to Digital Systems'].map((c) => (
                <span className="tag mono" key={c}>{c}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
