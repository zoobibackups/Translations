import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LanguageScreen from '../screens/LanguageScreen';
const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={'LanguageScreen'}>

        <Stack.Screen 
          name={"LanguageScreen"}
          options={{headerShown:true , title:"Select Language"}}   
          component={LanguageScreen}     
        />
     
     
    </Stack.Navigator>
  );
}

export default AuthStack;
