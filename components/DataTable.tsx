
import { useState } from "react";
import { tableData } from "@/data/table";

export function DataTable() {
  const [query, setQuery] = useState("");
  const filtered = tableData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border w-full rounded"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Name</th>
              <th className="p-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
