import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import NavegacaoApp from './src/navegacao/navegacaoapp';
import Autenticacao from './src/navegacao/autenticacao';

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


// substituir para a tela desejada que querer caso queira ver ela