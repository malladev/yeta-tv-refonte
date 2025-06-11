import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SeriesDetailPage from './pages/SeriesDetailPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/series/:id" element={<SeriesDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;