import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../navegacao/Login';
import Registro from '../navegacao/Registro';
import colors from '../tema/cores';

const Stack = createNativeStackNavigator();

export default function Autenticacao({ setIsLoggedIn }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="Login">
        {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
}
