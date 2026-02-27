import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface CategoryChartProps {
  data: { name: string; value: number; color: string }[];
}

export function CategoryChart({ data }: CategoryChartProps) {
  return (
    <div className="h-48 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
             content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 shadow-lg rounded-lg border border-gray-100 text-xs text-gray-600">
                    <p className="font-semibold" style={{ color: payload[0].payload.color }}>
                      {payload[0].name}
                    </p>
                    <p>{payload[0].value}%</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-2xl font-bold text-gray-900">4h 12m</span>
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Total</span>
      </div>
    </div>
  );
}
