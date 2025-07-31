// components/ChartBar.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { barData } from "@/data/chart-bar";

export function ChartBar() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}