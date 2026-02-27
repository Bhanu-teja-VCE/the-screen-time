import { subDays, format } from 'date-fns';

export const weeklyData = Array.from({ length: 7 }).map((_, i) => {
  const date = subDays(new Date(), 6 - i);
  return {
    day: format(date, 'EEE'),
    date: format(date, 'MMM d'),
    hours: Math.floor(Math.random() * 5) + 2 + Math.random(), // Random hours between 2 and 7
  };
});

export const appUsageData = [
  { name: 'Social', value: 45, color: '#3b82f6' }, // Blue
  { name: 'Productivity', value: 25, color: '#10b981' }, // Green
  { name: 'Entertainment', value: 20, color: '#f59e0b' }, // Amber
  { name: 'Utilities', value: 10, color: '#6b7280' }, // Gray
];

export const topApps = [
  { name: 'Instagram', time: '1h 45m', category: 'Social', icon: 'Instagram' },
  { name: 'YouTube', time: '1h 12m', category: 'Entertainment', icon: 'Youtube' },
  { name: 'Safari', time: '48m', category: 'Utilities', icon: 'Compass' },
  { name: 'Messages', time: '35m', category: 'Social', icon: 'MessageCircle' },
  { name: 'Mail', time: '22m', category: 'Productivity', icon: 'Mail' },
];
