import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStackNavigator';
import MainStack from './MainStackNavigator';
const MainApp = () => {
  const {selectedLanguage, isHomeScreen} = useSelector(state => state.languageReducer);
  const {t,i18n} = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  },[selectedLanguage])
  return (
    <NavigationContainer>
      {isHomeScreen   ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainApp;