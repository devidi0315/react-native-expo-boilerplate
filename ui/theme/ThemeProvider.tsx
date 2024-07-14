import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components/native';
import baseTheme from './base';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const theme = useMemo(() => baseTheme, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
