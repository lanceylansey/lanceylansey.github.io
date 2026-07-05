import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeading index="08" title="Contact" />
        <div className="contact-block reveal">
          <a href="mailto:lance.tapang@uleth.ca" className="contact-primary serif">
            lance.tapang@uleth.ca
          </a>
          <div className="contact-meta mono">
            <a href="tel:+15878215500">587.821.5500</a>
            <span className="dagger" aria-hidden="true">†</span>
            <a href="https://github.com/lanceylansey" target="_blank" rel="noreferrer">
              github.com/lanceylansey
            </a>
            <span className="dagger" aria-hidden="true">†</span>
            <span>Lethbridge, AB</span>
          </div>
        </div>
      </div>
    </section>
  )
}
