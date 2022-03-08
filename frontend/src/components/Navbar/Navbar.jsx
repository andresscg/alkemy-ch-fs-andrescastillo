import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Link to="/">Home</Link>
      <Link to="/transactions">Transactions</Link>
    </div>
  )
}

export default Navbar
