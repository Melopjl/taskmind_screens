import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Autenticacao from './src/navegacao/autenticacao';
import NavegacaoApp from './src/navegacao/navegacaoapp';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <NavegacaoApp />
      ) : (
        <Autenticacao setIsLoggedIn={setIsLoggedIn} /> 
      )}
    </NavigationContainer>
  );
}
