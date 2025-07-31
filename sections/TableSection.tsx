
import { DataTable } from "@/components/DataTable";
import { tableData } from "@/data/table";

export function TableSection() {
  return (
    <section className="bg-background p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">User Table</h2>
      <DataTable data={tableData} />
    </section>
  );
}
