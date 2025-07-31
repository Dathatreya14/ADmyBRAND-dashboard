
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { pieData } from "@/data/chart-pie";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function ChartPie() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
