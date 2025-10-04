import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navegacaoapp from './src/navegacao/navegacaoapp';
import autenticacao from './src/navegacao/autenticacao';

export default function App() {
  const isLoggedIn = true; 
  return (
    <NavigationContainer>
      {isLoggedIn ? <navegacaoapp /> : <autenticacao />}
    </NavigationContainer>
  );
}
