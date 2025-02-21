import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fonts from '../constants/fonts';
import { hp, moderateScale, wp } from '../constants/scaling';
import theme from '../constants/theme';
import { setHomeScreen, setSelectedLanguage } from '../store/actions/languageActions';
import Languages from '../utils/translations';

const LanguageScreen = ({navigation}) => {
  const {t,i18n} = useTranslation()
  const dispatch = useDispatch();
  const {selectedLanguage} = useSelector(state => state.languageReducer);
  const [is_selected, setIsSelected] = useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (is_selected) {
              dispatch(setHomeScreen(true))
            } else {
             alert("No Language")
            }
          }}>
          <Text
            style={{
              color: theme.textColor,
              fontFamily: fonts.Bold,
              fontSize: moderateScale(18),
            }}>
            {t("ok")}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation,selectedLanguage, is_selected]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar
        backgroundColor={theme.primaryColor}
        barStyle={'light-content'}
      />
      
          <FlatList
            data={Languages}
            numColumns={2}
            contentContainerStyle={{paddingBottom: hp(3)}}
            columnWrapperStyle={{
              alignSelf: 'center',
              width: wp(100),
              justifyContent: 'space-evenly',
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={`${index}`}
                  onPress={() => {
                    dispatch(setSelectedLanguage(item?.code));
                    setIsSelected(true);
                    i18n.changeLanguage(item?.code);
                  }}
                  style={styles.languageBox}>
                  <Image
                    source={{uri: item.flag}}
                    resizeMode={"cover"}
                    style={{
                      width: wp(12),
                      borderRadius: moderateScale(5),
                      height: wp(8),
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.languageText}>
                      {item.name}
                    </Text>
                    <View style={styles.RadioOut}>
                      {selectedLanguage == item.code && is_selected && (
                        <View style={styles.RadioIn}></View>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
       

        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  logoStyle: {
    width: wp(40),
    alignSelf: 'center',
    height: wp(40),
    marginTop: wp(30),
  },
  languageBox: {
    width: wp(44),
    padding: moderateScale(10),
    alignSelf: 'center',
    marginTop: moderateScale(10),
    borderColor: theme.borderColor,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(6),
    backgroundColor: theme.white,
    height: moderateScale(80),
    elevation: 10,
  },
  languageText: {
    fontFamily: fonts.Medium,
    color: theme.textColor,
    includeFontPadding: false,
    fontSize: moderateScale(16),
    marginVertical: moderateScale(10),
  },
  RadioOut: {
    width: wp(6),
    height: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(0.5),
    borderRadius: wp(5),
    borderColor: theme.borderColor,
  },
  RadioIn: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(3),
    backgroundColor: theme.blackColor,
  },
  AdView: {
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp(92),
    paddingVertical: moderateScale(10),
    marginTop: wp(2),
    height: hp(20),
    borderColor: theme.blackColor,
  },
});

export default LanguageScreen;
