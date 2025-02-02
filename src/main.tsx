import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeProviders, { ThemeContextProvider } from "./themes/ThemeProviders";
import { AuthProvider } from "./contexts/AuthContext";

const ApplicationRoot = () => {
  return (
    <ThemeContextProvider>
      <ThemeProviders>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProviders>
    </ThemeContextProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationRoot />
  </StrictMode>
);
