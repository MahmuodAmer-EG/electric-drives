import { Link } from 'react-router-dom'
import { lectures } from '../App'
import ThemeToggle from '../components/ThemeToggle'
import './Home.css'

const chapterMap = {
  1: '#2563eb',  // Ch1 Introduction - blue
  2: '#16a34a', 3: '#16a34a', 4: '#16a34a',  // Ch2 Dynamics - green
  5: '#d97706', 6: '#d97706',  // Ch3 Traction - amber
  7: '#9333ea', 8: '#9333ea', 9: '#9333ea', 10: '#9333ea',  // Ch4 DC Drives - purple
  11: '#0891b2', 12: '#0891b2',  // Ch5 IM Drives - teal
}

export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <ThemeToggle />
        <div className="hero-content">
          <span className="hero-badge">ELE421</span>
          <h1>Electric Drives</h1>
          <p className="hero-subtitle">Interactive Lecture Notes</p>
          <p className="hero-description">
            12 interactive lectures covering electric drive fundamentals,
            dynamics, traction systems, DC drives, and induction motor drives.
          </p>
        </div>
      </header>

      <main className="lectures-grid">
        {lectures.map((lecture, i) => {
          const color = chapterMap[lecture.id] || '#2563eb'
          return (
            <Link
              key={lecture.id}
              to={`/lecture/${lecture.slug}`}
              className="lecture-card"
              style={{ '--card-accent': color }}
            >
              <span className="lecture-number">Lecture {lecture.id}</span>
              <h2 className="lecture-title">{lecture.title}</h2>
              <span className="lecture-arrow">&rarr;</span>
            </Link>
          )
        })}
      </main>

      <footer className="footer">
        <p>Electric Drives (ELE421) &mdash; Interactive Lecture Notes</p>
      </footer>
    </div>
  )
}
