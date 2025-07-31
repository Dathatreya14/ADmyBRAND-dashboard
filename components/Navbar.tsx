
import { Toggle } from "./Toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <Toggle />
    </nav>
  );
}
