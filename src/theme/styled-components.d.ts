import "styled-components/native";
import { Theme } from "./theme";

declare module "styled-components/native" {
  type ThemeType = typeof Theme;
  export interface DefaultTheme extends Theme {}
}
