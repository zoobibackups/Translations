import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import fonts from '../constants/fonts';
import { RFValue, hp, moderateScale, scale, wp } from '../constants/scaling';
import theme from '../constants/theme';
export default function HomeScreen({navigation}) {
  const {t} = useTranslation()
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: moderateScale(20),
          backgroundColor: theme.whiteColor,
        }}>
        <View style={styles.cardItem}>
          <Text style={styles.boldText}>{t("contact_book_permission")}:</Text>
          <Text style={styles.MediumText}>
           {t("inordertoshhowbestsearchresults")}
          </Text>
          <TouchableOpacity
            
            style={styles.allowButton}>
            <Text
              style={{
                color: theme.whiteColor,
                fontFamily: fonts.Bold,
                fontSize: RFValue(14),
                includeFontPadding: false,
              }}>
             {t("allow_contacts")}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  textInputStyle: {
    width: wp(94),
    height: hp(6),
    paddingHorizontal: 0,
    alignSelf: 'center',
    marginVertical: hp(1),
    fontSize: RFValue(13),
    backgroundColor: theme.inputBgColor,
    paddingHorizontal: wp(5),
    borderRadius: moderateScale(5),
    fontFamily: fonts.Medium,
    includeFontPadding: false,
  },
  cardItem: {
    flexDirection: 'column',
    backgroundColor: theme.lightGrayColor,
    margin: moderateScale(5),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(7),
    padding: moderateScale(15),
  },
  empty: {
    marginVertical: moderateScale(20),
    alignSelf: 'center',
  },
  boldText: {
    fontFamily: fonts.Bold,
    fontSize: RFValue(14),
    marginTop: moderateScale(0),
    includeFontPadding: false,
    color: theme.primaryColor,
  },
  MediumText: {
    fontFamily: fonts.Medium,
    marginTop: moderateScale(5),
    fontSize: RFValue(12),
    color: theme.textColor,
    includeFontPadding: false,
    alignSelf: 'flex-start',
  },
  allowButton: {
    backgroundColor: theme.buttonBgColor,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    marginTop: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  row: {
    minHeight: moderateScale(55),
    maxHeight: moderateScale(55),
    flexDirection: 'row',
    borderRadius: RFValue(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ECF0F3',
    marginVertical: moderateScale(2.5),
    paddingHorizontal: scale(5),
    paddingLeft: scale(5),
  },
  rContainer: {
    marginLeft: 0,
  },
  item_mainView: {
    borderRadius: RFValue(5),
    height: moderateScale(60),
    backgroundColor: theme.whiteColor,
    alignSelf: 'center',
    paddingRight: 0,
    paddingLeft: 0,
    width: wp(96),
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: RFValue(15),
    fontFamily: fonts.Bold,
    backgroundColor: '#ECF0F3',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'rgba(25, 53, 102, 1)',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: RFValue(14),
    marginTop: 0,
    fontFamily: fonts.Medium,
    color: 'rgba(25, 53, 102, 1)',
    paddingHorizontal: moderateScale(10),
    borderRadius: RFValue(30),
    includeFontPadding: false,
  },
});
