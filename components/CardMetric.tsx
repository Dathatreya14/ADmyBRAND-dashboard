
import { Card, CardContent } from "@/components/ui/card";

interface CardMetricProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

export function CardMetric({ title, value, icon }: CardMetricProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardContent>
    </Card>
  );
}