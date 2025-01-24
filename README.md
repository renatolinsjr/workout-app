# Workout Progress App

Code Challenge for AMP.

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Chart.js & react-chartjs-2
- Framer Motion
- CSS Modules

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm

## 🔧 Installation

1. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Access the application at `http://localhost:5173`

## 🎨 Main Components

### WeeklyWorkoutChart
- Interactive chart displaying weekly workout data
- Duration and calories visualization
- Workout type legend

### DailyGoalsChecklist
- Daily goals list with animated checkboxes
- Categorization by type (Fitness, Health, Nutrition)
- Smooth interaction animations

### QuickActions
- Quick action buttons with animations
- Visual hover and click effects
- Intuitive interface

## ✨ TODO

- [ ] Dark Theme

Unfortunately I couldn't implement the Dark Mode on due to time.

During the 3 hours of the challenge I set aside the first 30 minutes to do the initial setup and look for dashboard inspiration on Dribble: https://dribbble.com/shots/22016576-Fitness-Dashboard

During the rest of the time I focused my attention on creating the components and animations. When I realized I had already created too many classes without paying attention to the color schema and the design system.

However, if I had more time I would have implemented Dark Mode by creating variables in the css root and a custom hook to set the ".dark" class to the application body. The hook would be called within a ToogleButton component to turn DarkMode on and off.
