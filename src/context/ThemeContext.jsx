import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themes = {
  blue: {
    primary: "#2563EB",
    secondary: "#1E293B",
    background: "#F8FAFC",
  
  },
  dark: {
    primary: "#22C55E",
    background: "#020617",
    text: "#E5E7EB",
  },
  light: {
    primary: "#111827",
    background: "#FFFFFF",
    accent: "#6366F1",
    
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blue"); 

  useEffect(() => {
    const root = document.documentElement;
    const t = themes[theme];

    root.style.setProperty("--color-primary", t.primary);
root.style.setProperty("--color-secondary", t.secondary || "");
root.style.setProperty("--color-background", t.background);
root.style.setProperty("--color-text", t.text || "#000000");
root.style.setProperty("--color-accent", t.accent || t.primary);

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
