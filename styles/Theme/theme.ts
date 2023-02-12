import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff", // text color
  black: "#000000",
  background: "#1f1f1f", // screen background
  blueGreen: "#3484a8", // 청록
  grey: "#353535", // input, subNav color
};

const fontWeight = {
  light: 300,
  normal: 500,
  bold: 700,
};

const borderRadius = {
  input: "17px",
  button: "15px",
};

export type ColorsTypes = typeof color;
export type FontWeightTypes = typeof fontWeight;
export type BorderRadiusTypes = typeof borderRadius;

const theme: DefaultTheme = {
  color,
  fontWeight,
  borderRadius,
};

export default theme;
