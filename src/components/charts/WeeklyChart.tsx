import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface WeeklyChartProps {
  data: { day: string; hours: number }[];
}

export function WeeklyChart({ data }: WeeklyChartProps) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            hide 
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 shadow-lg rounded-lg border border-gray-100 text-xs text-gray-600">
                    <p className="font-semibold">{payload[0].payload.day}</p>
                    <p>{payload[0].value?.toFixed(1)} hours</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="hours" radius={[4, 4, 4, 4]} barSize={32}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === data.length - 1 ? '#3b82f6' : '#e5e7eb'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
