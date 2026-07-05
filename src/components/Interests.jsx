import SectionHeading from './SectionHeading.jsx'

const INTERESTS = [
  {
    title: 'AI / LLMs & RAG Pipelines',
    body: 'Currently exploring LLM integration and retrieval-augmented generation (RAG) pipelines through personal projects, including building a Discord bot.',
  },
  {
    title: 'PC Building',
    body: 'Enthusiast in PC hardware with hand-on experience building and configuring systems, staying up to date with market trends and developments',
  },
  {
    title: 'Video & Photo Editing',
    body: 'Learning DaVinci Resolve for personal video editing projects and using Adobe Photoshop for photo editing, building hands-on experience with industry standard creative tools.',
  },
]

export default function Interests() {
  return (
    <section id="interests">
      <div className="container">
        <SectionHeading index="07" title="Interests" />
        <div className="interest-list">
          {INTERESTS.map((it) => (
            <article className="interest reveal" key={it.title}>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
