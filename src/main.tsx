import App from "@/App";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
