'use client'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(undefined);

export function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
