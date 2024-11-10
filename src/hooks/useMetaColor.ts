import { META_THEME_COLORS } from "@/config/site";
import { useTheme } from "@/providers/ThemeProvider";
import { useCallback, useEffect, useState } from "react";

export function useMetaColor() {
  const { theme } = useTheme();

  // Manage metaColor in state to store the required color
  const [metaColor, setMetaColor] = useState(
    theme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light,
  );

  // Update metaColor when the theme changes
  useEffect(() => {
    const newMetaColor =
      theme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light;
    setMetaColor(newMetaColor);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", newMetaColor);
  }, [theme]);

  // Function to manually update metaColor
  const updateMetaColor = useCallback((color: string) => {
    setMetaColor(color);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
  }, []);

  return {
    metaColor,
    setMetaColor: updateMetaColor,
  };
}
