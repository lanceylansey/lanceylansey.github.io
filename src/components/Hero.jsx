export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-centered reveal">
        <h1 className="serif">Lance Tapang</h1>
        <p className="hero-sub">
          Computer Science student @ University of Lethbridge, expected
          Spring 2027.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View projects →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-contact mono">
          <a href="mailto:lance.tapang@uleth.ca">lance.tapang@uleth.ca</a>
          <span className="dagger" aria-hidden="true">†</span>
          <span>587.821.5500</span>
          <span className="dagger" aria-hidden="true">†</span>
          <a href="https://github.com/lanceylansey" target="_blank" rel="noreferrer">
            github.com/lanceylansey
          </a>
        </div>
      </div>
    </section>
  )
}
