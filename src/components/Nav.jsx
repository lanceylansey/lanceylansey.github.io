const LINKS = [
  ['01', 'About', '#about'],
  ['02', 'Skills', '#skills'],
  ['03', 'Projects', '#projects'],
  ['04', 'Experience', '#experience'],
  ['05', 'Education', '#education'],
  ['06', 'Clubs', '#clubs'],
  ['07', 'Interests', '#interests'],
  ['08', 'Contact', '#contact'],
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-mark">LT</a>
        <nav className="nav-links">
          {LINKS.map(([n, label, href]) => (
            <a key={href} href={href} className="nav-link">
              <span className="mono nav-num">{n}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
