import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useWorkoutData } from '../../hooks/useWorkoutData';
import { WorkoutType } from '../../types/workout';
import { getWorkoutColor } from '../../utils/color';
import './WeeklyWorkoutChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const WeeklyWorkoutChart: React.FC = () => {
  const { workoutData, isLoading, error } = useWorkoutData();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const chartData = {
    labels: workoutData.map((workout) => workout.day),
    datasets: [
      {
        label: 'Duration (minutes)',
        data: workoutData.map((workout) => workout.duration),
        backgroundColor: workoutData.map((workout) => getWorkoutColor(workout.type)),
        borderRadius: 6,
      },
      {
        label: 'Calories',
        data: workoutData.map((workout) => workout.calories),
        backgroundColor: workoutData.map(
          (workout) => `${getWorkoutColor(workout.type)}80`
        ),
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Weekly Workouts',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const datasetLabel = context.dataset.label || '';
            const value = context.parsed.y;
            const workout = workoutData[context.dataIndex];
            return [
              `${datasetLabel}: ${value}`,
              `Type: ${workout.type}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          callback: (value) => `${value}`,
        },
      },
    },
  };

  return (
    <div className="weekly-workout-chart">
      <div className="chart-container">
        <Bar data={chartData} options={options} />
      </div>
      <div className="workout-types-legend">
        {Object.values(WorkoutType).map(
          (type) =>
            type !== WorkoutType.REST && (
              <div key={type} className="legend-item">
                <div
                  className="color-box"
                  style={{ backgroundColor: getWorkoutColor(type) }}
                />
                <span>{type}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
}; 