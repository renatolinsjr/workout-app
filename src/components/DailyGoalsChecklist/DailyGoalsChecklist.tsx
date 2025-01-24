import React from 'react';
import { useDailyGoals } from '../../hooks/useDailyGoals';
import './DailyGoalsChecklist.css';

export function DailyGoalsChecklist(): JSX.Element {
  const { goals, isLoading, error, toggleGoal } = useDailyGoals();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="daily-goals-checklist">
      <h2>Daily Goals</h2>
      <div className="goals-container">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className={`goal-item ${goal.completed ? 'completed' : ''}`}
            onClick={() => toggleGoal(goal.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleGoal(goal.id);
              }
            }}
          >
            <div className="checkbox-wrapper">
              <div className="custom-checkbox">
                <svg className="checkmark" viewBox="0 0 24 24">
                  <path
                    d="M20 6L9 17L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="goal-content">
              <div className="goal-header">
                <span className="goal-icon">{goal.icon}</span>
                <h3 className="goal-title">{goal.title}</h3>
              </div>
              <div className="goal-details">
                <span className="goal-target">{goal.target}</span>
                <span className="goal-category">{goal.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 