import { WorkoutType } from '../types/workout';

export const getWorkoutColor = (type: WorkoutType): string => {
  const colors = {
    [WorkoutType.CARDIO]: '#FF6B6B',
    [WorkoutType.STRENGTH]: '#4ECDC4',
    [WorkoutType.REST]: '#DFE4EA',
  };
  return colors[type];
}; 