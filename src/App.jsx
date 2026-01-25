import { useState } from 'react'
import Profile from './components/profile'
import Todo from './components/todo'

function App() {
  return (
     <section className="app-container">
       <Profile />
       <Todo />
    </section>
  )
}

export default App
