import React from 'react';
import Routes from './Routes'
import Menu from 'components/Menu'
import './App.scss'
import './css/pure-min.css'
import './css/side-menu.css'


function App() {
  return (
    <div id="layout">
      <Menu />
      <div id="main" className="p-5">
        <Routes />
      </div>
    </div>
  )
}

export default App
