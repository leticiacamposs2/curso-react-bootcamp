import React from 'react'
import './App.css'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

export default function App() {
  return (
    <div style={{padding: 10}}>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
  )
}

