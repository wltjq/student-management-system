import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudentProfile from './pages/StudentProfile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/:id" element={<StudentProfile />} />
      </Routes>
    </Router>
  )
}

export default App
