import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Registro from './Registro';
import colors from '../tema/cores';

const Stack = createNativeStackNavigator();

export default function autenticacao() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: colors.card },
      headerTintColor: colors.text,
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
}
