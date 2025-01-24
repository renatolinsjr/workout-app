export interface DailyGoal {
  id: string;
  title: string;
  target: string;
  completed: boolean;
  category: GoalCategory;
  icon: string;
}

export enum GoalCategory {
  FITNESS = 'Fitness',
  HEALTH = 'Health',
  NUTRITION = 'Nutrition'
} 