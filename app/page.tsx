// app/page.tsx
import { Overview } from "@/sections/Overview";
import { Charts } from "@/sections/Charts";
import { TableSection } from "@/sections/TableSection";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-6 space-y-8">
        <Overview />
        <Charts />
        <TableSection />
        </main>
    );
}
