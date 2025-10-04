// App.js
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Componentes principais
import NavegacaoApp from './src/navegacao/navegacaoapp';
import Autenticacao from './src/navegacao/autenticacao';

export default function App() {
  // Estado de login
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