import React from 'react'

const MenuItem = ({ label, onClick }) => {
  return (
    <li className="pure-menu-item">
      <span onClick={onClick} className="pure-menu-link">{label}</span>
    </li>
  )
}

export default MenuItem
