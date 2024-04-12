import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;

export const theme = {
  colors: {
    primary: "#6949FF",
    primary400: "#876DFF",
    primary300: "#A592FF",
    primary200: "#B9B3FF",
    primary100: "#F0EDFF",
    secondary: "#FFC107",
    secondary400: "#FFD54F",
    secondary300: "#FFE082",
    secondary200: "#FFECB3",
    secondary100: "#FFF9C4",
    success: "#12D18E",
    info: "#6949FF",
    warning: "##FACC15",
    error: "#F75555",
    disabled: "#D8D8D8",
    disButton: "#543acc",
    greyScale900: "#212121",
    greyScale800: "#424242",
    greyScale700: "#616161",
    greyScale600: "#757575",
    greyScale500: "#9E9E9E",
    greyScale400: "#BDBDBD",
    greyScale300: "#E0E0E0",
    greyScale200: "#EEEEEE",
    greyScale100: "#F5F5F5",
    greyScale50: "#FAFAFA",
    backgroundPurple: "#F5F6FF",
    Purple: "#F9F8FF",
    Yellow: "#FFFCEB",
    Green: "#F1FDF5",
    Blue: "#F6F9FF",
    Teal: "#F2FFF9",
    Red: "#FFF7F8",
    Orange: "#FFF8ED",
    Cyan: "#F8FEFD",
    transparent: {
      Purple: "#6949FF",
      Yellow: "#FFD300",
      Green: "#12D18E",
      Blue: "#24B6FD",
      Teal: "#019B83",
      Red: "#FF5A5F",
      Orange: "#FF9800",
      Cyan: "#00BCD4",
    },
  },
  fontFamilyName: "Nunito-Black",
  fontWeight: {
    light: "Nunito-Light",
    regular: "Nunito-Regular",
    semibold: "Nunito-SemiBold",
    bold: "Nunito-Bold",
  },
  fontSize: {
    heading1: scale(48),
    heading2: scale(40),
    heading3: scale(32),
    heading4: scale(24),
    heading5: scale(20),
    heading6: scale(16),
    text: scale(14),
  },
};


export type Theme = typeof theme;