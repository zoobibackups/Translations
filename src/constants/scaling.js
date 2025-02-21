import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
const SCREEN_WIDTH = Dimensions.get("screen").width
  const SCREEN_HEIGHT  = Dimensions.get("screen").height 
export { RFValue,SCREEN_HEIGHT,SCREEN_WIDTH,hp,moderateScale,moderateVerticalScale,scale,verticalScale,wp };

