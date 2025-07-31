
import { CardMetric } from "@/components/CardMetric";
import { metrics } from "@/data/metrics";

export function Overview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <CardMetric key={metric.title} {...metric} />
      ))}
    </section>
  );
}