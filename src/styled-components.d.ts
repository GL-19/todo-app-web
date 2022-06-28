import "styled-components";
import { ITheme } from "./styles/theme";

declare module "styled-components" {
	interface DefaultTheme extends ITheme {}
}
