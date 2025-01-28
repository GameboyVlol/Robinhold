import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        ...colors.light,
      }
    : {
        ...colors.dark,
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Code Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Code Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Code Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Code Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Code Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      caption:{
        fontSize: `${12/16} rem`,
      }
    },
    fontSize: {
      extraLargeHeader: "2.5rem",
      largeHeader: "2rem",
      mediumHeader: "1.5rem",
      mainHeader: "1.25rem",
      bodySize: "1rem",
      smallBody: `${14 / 16}rem`,
      smallerBody: `${12 / 16}rem`,
    },
    fontWeight:{
      thin: 300,
      medium: 400,
      semi: 700,
      bold: 700
    },
    shape:{
      borderRadius: 4,
      borderRadiusMedium: 8,
      borderRadiusLarge:12,
      borderRadiusExtraLarge: 20,
      tableRowHeight: 64,
      tableRowHeightCompact: 56,
      tableRowHeightDense: 48
    },
    
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
