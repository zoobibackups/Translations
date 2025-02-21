import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();
function StackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Contacts'}}
        component={HomeScreen}
      />

     
    </Stack.Navigator>
  );
}

export default StackScreens;
