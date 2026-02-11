import { Navigate, Route, Routes } from 'react-router-dom';
import PMTLPage from './pages/PMTLPage';
import PMTLDocPage from './pages/PMTLDocPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PMTLPage />} />
      <Route path="/pmtl-doc" element={<PMTLDocPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
