import { Dimensions } from "react-native";
import { moderateScale } from "./scaling";
export const SCREEN_WIDTH = Dimensions.get("screen").width - moderateScale(20)