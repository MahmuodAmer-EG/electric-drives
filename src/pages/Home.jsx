import { Link } from 'react-router-dom'
import { lectures } from '../App'
import ThemeToggle from '../components/ThemeToggle'
import './Home.css'

const chapterColors = ['#2563eb', '#16a34a', '#d97706', '#9333ea']

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
            Comprehensive lecture series covering electric drive fundamentals,
            dynamics, traction systems, and DC drives.
          </p>
        </div>
      </header>

      <main className="lectures-grid">
        {lectures.map((lecture, i) => {
          const color = chapterColors[i % chapterColors.length]
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
