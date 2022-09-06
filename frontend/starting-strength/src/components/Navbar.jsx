import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
          <div className="container">
            <Link to="/">Starting Strength</Link>
            <Link to="/training-tips">Training Tips</Link>
          </div>
    </header>
  )
}

export default Navbar