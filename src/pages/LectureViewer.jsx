import { useParams, Link } from 'react-router-dom'
import { lectures } from '../App'
import './LectureViewer.css'

export default function LectureViewer() {
  const { slug } = useParams()
  const lecture = lectures.find((l) => l.slug === slug)
  const currentIndex = lectures.findIndex((l) => l.slug === slug)
  const prev = currentIndex > 0 ? lectures[currentIndex - 1] : null
  const next = currentIndex < lectures.length - 1 ? lectures[currentIndex + 1] : null

  if (!lecture) {
    return (
      <div className="viewer-error">
        <h2>Lecture not found</h2>
        <Link to="/">&larr; Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="viewer">
      <nav className="viewer-nav">
        <Link to="/" className="nav-home">&larr; All Lectures</Link>
        <span className="nav-title">Lecture {lecture.id}: {lecture.title}</span>
        <div className="nav-arrows">
          {prev ? (
            <Link to={`/lecture/${prev.slug}`} className="nav-prev" title={prev.title}>
              &larr; Prev
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/lecture/${next.slug}`} className="nav-next" title={next.title}>
              Next &rarr;
            </Link>
          ) : <span />}
        </div>
      </nav>

      <iframe
        className="viewer-iframe"
        src={`/lectures/${slug}.html`}
        title={lecture.title}
      />
    </div>
  )
}
