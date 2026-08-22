import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="theme-toggle"
    >
      {theme === "dark" ? (
        <Sun className="size-4" strokeWidth={1.6} />
      ) : (
        <Moon className="size-4" strokeWidth={1.6} />
      )}
    </button>
  );
}
