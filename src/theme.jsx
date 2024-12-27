import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Function to get theme tokens
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Palette values for light mode
          myColor: {
            main: "#F6F9FC",
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // Palette values for dark mode
          myColor: {
            main: "#252b32",
          },
          text: {
            primary: "#fff",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
        }),
  },
});

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  // Retrieve mode from localStorage or default to "light"
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "light"
  );

  // Memoized color mode toggle function
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update localStorage whenever the mode changes
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  // Create the theme based on the current mode
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};
