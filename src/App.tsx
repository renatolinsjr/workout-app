import React from 'react'
import './App.css'
import { WeeklyWorkoutChart } from './components/WeeklyWorkoutChart/WeeklyWorkoutChart'

function App() {
  return (
    <div className="app-container">
      <h1>Workout Progress</h1>
      <WeeklyWorkoutChart />
    </div>
  )
}

export default App
