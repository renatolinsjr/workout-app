import React from 'react';
import { motion } from 'framer-motion';
import './QuickActions.css';

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  color: string;
  onClick: () => void;
}

const actions: QuickAction[] = [
  {
    id: 'start-workout',
    title: 'Start Workout',
    icon: '🏋️‍♂️',
    color: '#4CAF50',
    onClick: () => console.log('Starting workout...'),
  },
  {
    id: 'view-progress',
    title: 'View Progress',
    icon: '📊',
    color: '#2196F3',
    onClick: () => console.log('Viewing progress...'),
  },
  {
    id: 'set-goals',
    title: 'Set Goals',
    icon: '🎯',
    color: '#FF9800',
    onClick: () => console.log('Setting goals...'),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

export function QuickActions(): JSX.Element {
  return (
    <motion.div
      className="quick-actions"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Quick Actions</h2>
      <div className="actions-grid">
        {actions.map((action) => (
          <motion.button
            key={action.id}
            className="action-button"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400 },
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: action.color,
            }}
            onClick={action.onClick}
            type="button"
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-title">{action.title}</span>
            <motion.div
              className="action-shine"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 