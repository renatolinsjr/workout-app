import { useState, useEffect } from 'react';
import { WorkoutData, WorkoutType } from '../types/workout';

export const useWorkoutData = () => {
  const [workoutData, setWorkoutData] = useState<WorkoutData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockData: WorkoutData[] = [
          { day: 'Monday', duration: 45, calories: 300, type: WorkoutType.CARDIO },
          { day: 'Tuesday', duration: 60, calories: 400, type: WorkoutType.STRENGTH },
          { day: 'Wednesday', duration: 30, calories: 200, type: WorkoutType.CARDIO },
          { day: 'Thursday', duration: 50, calories: 350, type: WorkoutType.STRENGTH },
          { day: 'Friday', duration: 55, calories: 380, type: WorkoutType.CARDIO },
          { day: 'Saturday', duration: 40, calories: 250, type: WorkoutType.STRENGTH },
          { day: 'Sunday', duration: 0, calories: 0, type: WorkoutType.REST },
        ];

        setWorkoutData(mockData);
        setIsLoading(false);
      } catch (err) {
        setError('Error loading workout data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { workoutData, isLoading, error };
}; 