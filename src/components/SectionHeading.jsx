export default function SectionHeading({ index, title }) {
  return (
    <div className="section-heading reveal">
      <span className="mono eyebrow">
        <span className="cross-mark" aria-hidden="true" />
        {index}
      </span>
      <h2 className="serif">{title}</h2>
      <div className="rule" />
    </div>
  )
}
