import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading index="01" title="About" />
        <p className="lead reveal">
          I'm Lance - A fourth year Computer Science student at the University of Lethbridge focused on AI/ML
          engineering, and full-stack development. Currently embedded with the UofL iGEM team, building software for automated genome engineering.
        </p>
        <p className="lead reveal">
          My journey started with OOP with C++, and I've since dove into
          the intersection between Computer Science with synthetic biology and medicine. Besides my work with iGEM and various side projects, I enjoy weightlifting, anime, and bouldering!
        </p>
        <p className="lead reveal">
          Besides my work with iGEM and various side projects, I enjoy weightlifting, anime, and bouldering!
        </p>
      </div>
    </section>
  )
}
