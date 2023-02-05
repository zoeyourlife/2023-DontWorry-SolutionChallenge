import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff",
  black: "#000000",
  green: "#34a853",
  yellow: "#fabb05",
  blue: "#4285F4",
};

const fontWeight = {
  light: 300,
  normal: 500,
  bold: 700,
};

export type ColorsTypes = typeof color;
export type FontSizeTypes = typeof fontWeight;

const theme: DefaultTheme = {
  color,
  fontWeight,
};

export default theme;
