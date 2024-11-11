'use client';
import { Moon, Sun } from "lucide-react";
import {Button} from "./ui/Button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(`Toggled to: ${newTheme}`); // Debug log
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 bg-white/90 dark:bg-gray-800/90 shadow-lg rounded-full transition-all duration-300 transform hover:scale-105"
      onClick={toggleTheme}
    >
      <Sun className={`h-6 w-6 transition-transform duration-300 ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
      <Moon className={`absolute h-6 w-6 transition-transform duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
