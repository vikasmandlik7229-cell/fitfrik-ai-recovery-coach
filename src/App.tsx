import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import AnalysisPage from './pages/AnalysisPage'
import NutritionPage from './pages/NutritionPage'
import RecoveryPage from './pages/RecoveryPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/nutrition" element={<NutritionPage />} />
      <Route path="/recovery" element={<RecoveryPage />} />
    </Routes>
  )
}

export default App
