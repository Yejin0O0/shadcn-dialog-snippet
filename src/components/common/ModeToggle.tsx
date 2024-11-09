import { Button } from "@/components/ui/button";
import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/useMetaColor";
import { useTheme } from "@/providers/ThemeProvider";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setMetaColor(
      theme === "light" ? META_THEME_COLORS.light : META_THEME_COLORS.dark,
    );
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="group/toggle h-8 w-8 px-0"
    >
      <SunIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
