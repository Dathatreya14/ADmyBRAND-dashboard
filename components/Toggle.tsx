
import { useTheme } from "next-themes";

export function Toggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 border rounded"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}