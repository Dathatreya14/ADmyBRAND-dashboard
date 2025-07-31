
import { ChartLine } from "@/components/ChartLine";
import { ChartBar } from "@/components/ChartBar";
import { ChartPie } from "@/components/ChartPie";

export function Charts() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ChartLine />
      <ChartBar />
      <ChartPie />
    </section>
  );
}