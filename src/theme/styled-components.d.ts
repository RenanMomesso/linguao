import "styled-components/native";
import { Theme } from "./theme";

declare module "styled-components/native" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends Theme {}
}
