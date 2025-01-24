import React from 'react'
import './App.css'
import { WeeklyWorkoutChart } from './components/WeeklyWorkoutChart/WeeklyWorkoutChart'
import { DailyGoalsChecklist } from './components/DailyGoalsChecklist/DailyGoalsChecklist'
import { QuickActions } from './components/QuickActions/QuickActions'

export function App(): JSX.Element {
  return (
    <div className="app-container">
      <h1>Workout Progress</h1>
      <div className="content-grid">
        <div className="sidebar">
          <QuickActions />
          <DailyGoalsChecklist />
        </div>
        <WeeklyWorkoutChart />
      </div>
    </div>
  )
}

export default App
