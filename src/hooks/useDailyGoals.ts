import { useState, useEffect } from "react";
import { DailyGoal, GoalCategory } from "../types/goals";

const mockGoals: DailyGoal[] = [
  {
    id: "1",
    title: "Daily Steps",
    target: "10,000 steps",
    completed: false,
    category: GoalCategory.FITNESS,
    icon: "👣",
  },
  {
    id: "2",
    title: "Water",
    target: "3L",
    completed: false,
    category: GoalCategory.HEALTH,
    icon: "💧",
  },
  {
    id: "3",
    title: "Protein",
    target: "120g",
    completed: false,
    category: GoalCategory.NUTRITION,
    icon: "🥩",
  },
  {
    id: "4",
    title: "Run",
    target: "30 minutes",
    completed: false,
    category: GoalCategory.FITNESS,
    icon: "🏃",
  },
  {
    id: "5",
    title: "Bodybuilding",
    target: "60 minutes",
    completed: false,
    category: GoalCategory.FITNESS,
    icon: "🏋️‍♂️",
  },
];

interface UseDailyGoalsReturn {
  goals: DailyGoal[];
  isLoading: boolean;
  error: string | null;
  toggleGoal: (goalId: string) => void;
}

export function useDailyGoals(): UseDailyGoalsReturn {
  const [goals, setGoals] = useState<DailyGoal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoals = async (): Promise<void> => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setGoals(mockGoals);
        setIsLoading(false);
      } catch {
        setError("Error loading daily goals");
        setIsLoading(false);
      }
    };

    void fetchGoals();
  }, []);

  const toggleGoal = (goalId: string): void => {
    setGoals((currentGoals) =>
      currentGoals.map((goal) =>
        goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return { goals, isLoading, error, toggleGoal };
}
