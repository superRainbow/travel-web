import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import TourTemplate from './components/pages/Tour-Template';
import Tour from './components/pages/Tour';
import About from './components/pages/About';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Layout />} >
        <Route path="About" element={<About />} />
        <Route path="Tour" element={<Tour />}>
          <Route path=":town" element={<TourTemplate />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 頁面</p>
            </main>
          }
        />
      </Route> 
    </Routes>
  )
}
