import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { InnerScroll } from "./components/examples/InnerScroll";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <InnerScroll />
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
