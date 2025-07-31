
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { lineData } from "@/data/chart-line";

export function ChartLine() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}