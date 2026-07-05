import SectionHeading from './SectionHeading.jsx'

const CLUBS = [
  {
    name: 'UofL Synthetic Biology Club',
    role: 'Software Team Lead',
    notes: [
      '● Serve as a software team member for the university’s iGEM team, contributing to development of a web-based control interface for automated genome engineering hardware.',
      '● Contribute to team outreach efforts by participating in promotional media highlighting the project’s synthetic biology research.',
    ],
  },
  {
    name: 'UofL Computer Science Club',
    role: 'General Member',
    notes: [
      '● Attended guest speaker events featuring industry professionals, gaining exposure to diverse career paths, emerging technologies, and post-graduate opportunities.',
      '● Occasionally participate in weekly programming challenges hosted by the club.'
    ]
  },
]

export default function Clubs() {
  return (
    <section id="clubs">
      <div className="container">
        <SectionHeading index="06" title="Clubs" />
        <ul className="beyond-list">
          {CLUBS.map((c) => (
            <li key={c.name} className="reveal">
              <span className="beyond-name">{c.name}</span>
              <span className="mono beyond-role">{c.role}</span>
              {c.notes?.map((note) => (
                <span className="beyond-note" key={note}>{note}</span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
