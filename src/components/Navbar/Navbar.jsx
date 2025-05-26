import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="sidebar">

  <div className="brand">
    <h2><span className="highlight">Health</span>care.</h2>
  </div>
  
  <div className="section">
    <p className="section-title">General</p>
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#" className="nav-link">
          <span className="icon">📊</span>
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <span className="icon">🕒</span>
          <span>History</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <span className="icon">📅</span>
          <span>Calendar</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <span className="icon">🩺</span>
          <span>Appointments</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <span className="icon">📈</span>
          <span>Statistics</span>
        </a>
      </li>
    </ul>
  </div>

  <div className="section">
    <p className="section-title">Tools</p>
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#" className="nav-link">
          <span className="icon">💬</span>
          <span>Chat</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <span className="icon">🛟</span>
          <span>Support</span>
        </a>
      </li>
    </ul>
  </div>

  <div className="footer">
    <a href="#" className="nav-link">
      <span className="icon">⚙️</span>
      <span>Setting</span>
    </a>
  </div>
</nav>
  )
}

export default Navbar
