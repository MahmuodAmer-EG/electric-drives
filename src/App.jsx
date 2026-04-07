import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LectureViewer from './pages/LectureViewer'

const lectures = [
  { id: 1, slug: 'lecture1_introduction', title: 'Introduction to Electric Drives' },
  { id: 2, slug: 'lecture2_dynamics_part1', title: 'Dynamics of Electric Drives — Part 1' },
  { id: 3, slug: 'lecture3_fluctuating_loads', title: 'Fluctuating Loads' },
  { id: 4, slug: 'lecture4_hoist_fan_drives', title: 'Hoist & Fan Drives' },
  { id: 5, slug: 'lecture5_electric_traction', title: 'Electric Traction' },
  { id: 6, slug: 'lecture6_traction_energy', title: 'Traction Energy' },
  { id: 7, slug: 'lecture7_dc_drives_single_phase', title: 'DC Drives — Single Phase' },
  { id: 8, slug: 'lecture8_dc_drives_3phase_choppers', title: 'DC Drives — 3-Phase & Choppers' },
]

export { lectures }

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lecture/:slug" element={<LectureViewer />} />
    </Routes>
  )
}
