import "styled-components";
import { ColorsTypes, FontSizeTypes } from "styles/Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    fontWeight: FontSizeTypes;
  }
}
