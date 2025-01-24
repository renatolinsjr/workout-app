export interface WorkoutData {
  day: string;
  duration: number;
  calories: number;
  type: WorkoutType;
}

export enum WorkoutType {
  CARDIO = 'Cardio',
  STRENGTH = 'Strength',
  REST = 'Rest'
} 