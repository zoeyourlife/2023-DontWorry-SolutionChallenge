import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff", // text color
  black: "#000000",
  background: "#1f1f1f", // screen background
  blueGreen: "#3484a8", // 청록
  grey: "#353535", // input, buttomNavbar color
  grey100: "#808080",
  grey500: "#6e6e6e",
  borderBackground: "#2e2c2c",
  borderGrey: "#707070",
};

const fontWeight = {
  light: 300,
  normal: 500,
  bold: 700,
};

const borderRadius = {
  input: "17px",
  button: "15px",
  imgCard: "10px",
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
