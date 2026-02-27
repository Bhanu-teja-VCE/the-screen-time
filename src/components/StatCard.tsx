import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ title, value, trend, trendUp, icon, className = '' }: StatCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-gray-50 rounded-xl text-gray-600">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
