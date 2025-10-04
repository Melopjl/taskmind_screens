import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import colors from '../tema/cores';

import Home from '../telas/home';
import Tarefas from '../telas/tarefas';
import Perfil from '../telas/perfil';
import EditarPerfil from '../telas/editarperfil';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="EditarPerfil" 
        component={EditarPerfil} 
        options={{
          title: 'Editar Perfil',
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.text
        }} 
      />
    </Stack.Navigator>
  );
}

export default function NavegacaoApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.card },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Tarefas') iconName = 'checkmark-done';
          else if (route.name === 'Perfil') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tarefas" component={Tarefas} />
      <Tab.Screen name="Perfil" component={PerfilStack} />
    </Tab.Navigator>
  );
}
