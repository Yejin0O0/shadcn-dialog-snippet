import { META_THEME_COLORS } from "@/config/site";
import { useTheme } from "@/providers/ThemeProvider";
import { useCallback, useEffect, useState } from "react";

export function useMetaColor() {
  const { theme } = useTheme();

  // metaColor를 state로 관리하여 필요한 색상을 저장
  const [metaColor, setMetaColor] = useState(
    theme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light,
  );

  // 테마가 변경될 때 metaColor를 업데이트
  useEffect(() => {
    const newMetaColor =
      theme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light;
    setMetaColor(newMetaColor);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", newMetaColor);
  }, [theme]);

  // 수동으로 metaColor를 변경할 수 있는 함수
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
