import { ThemeProvider } from "styled-components";

import { theme } from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProviderComponent: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
