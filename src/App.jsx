import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';

function App() {
  // Automatically detect if deployed under a repository subpath (e.g. /lucky-/) or root (/)
  const basename = window.location.pathname.startsWith('/lucky-')
    ? '/lucky-'
    : '/';

  return (
    <BrowserRouter basename={basename}>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            {/* Fallback redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Student Registration Portal. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
