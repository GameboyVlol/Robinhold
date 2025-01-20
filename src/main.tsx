import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeProviders from "./themes/ThemeProviders";
import { AuthProvider } from "./contexts/AuthContext";

const ApplicationRoot = () => {
  return (
    <ThemeProviders>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProviders>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationRoot />
  </StrictMode>
);
