import "styled-components";
import {
  ColorsTypes,
  FontWeightTypes,
  BorderRadiusTypes,
} from "styles/Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    fontWeight: FontWeightTypes;
    borderRadius: BorderRadiusTypes;
  }
}
