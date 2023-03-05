import {
  BorderRadiusTypes,
  ColorsTypes,
  FontWeightTypes,
} from "src/styles/Theme/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    fontWeight: FontWeightTypes;
    borderRadius: BorderRadiusTypes;
  }
}
