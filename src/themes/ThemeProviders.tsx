import React from "react";
import { ThemeContext, useColorTheme, useThemeContext } from "./theme";
import { CssBaseline, ThemeProvider as MainThemeProvider } from "@mui/material";

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const colorTheme = useColorTheme();
  return (
    <ThemeContext.Provider value={colorTheme}>{children}</ThemeContext.Provider>
  );
}

function ThemeProviders({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();
  return (
      <MainThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MainThemeProvider>
  );
}

export default ThemeProviders;
