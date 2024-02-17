import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
        <h4 className="navbar-brand">React x Express</h4>
        <ul className="link-wrapper">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/tambah">Tambah</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation