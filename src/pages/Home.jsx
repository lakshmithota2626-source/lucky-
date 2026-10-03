import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-card">
        <div className="hero-badge">Welcome to Campus Portal</div>
        <h1 className="hero-title">Student Registration Portal</h1>
        <p className="hero-description">
          Welcome to the official Student Registration Portal. Students can
          quickly and easily register for the current academic session by
          entering their basic academic and personal details.
        </p>
        <div className="hero-actions">
          <Link to="/register" className="btn btn-primary btn-large">
            Register Now →
          </Link>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <h3>Quick Registration</h3>
            <p>Complete your registration in just a minute with simple details.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📋</span>
            <h3>Real-time Validation</h3>
            <p>Ensure all required information is formatted accurately before submit.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <h3>Instant Confirmation</h3>
            <p>View your submitted enrollment summary immediately after submission.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
