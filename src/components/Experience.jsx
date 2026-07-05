import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading index="04" title="Experience" />
        <div className="row-list">
          <article className="row-item reveal">
            <div className="row-head">
              <h3>Cast Member</h3>
              <span className="mono project-dates">Cineplex &middot; Aug 2023 — Present</span>
            </div>
            <p>
              Guest service in a high-volume entertainment venue. Communicate with team members and guests to resolve
              issues and maintain a positive experience.
            </p>
            <div className="tag-row">
              <span className="tag mono">Cast Member of the Month ×3</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
