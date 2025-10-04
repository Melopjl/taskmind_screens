import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import colors from '../tema/cores';

// Telas principais
import Home from 'src/telas/Home';
import Tarefas from 'src/telas/Tarefas';
import Calendario from '../telas/Calendario';
import Notificacoes from '../telas/Notificacoes';
import Perfil from 'src/telas/Perfil';
import EditarPerfil from '../telas/EditarPerfil';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen 
        name="EditarPerfil" 
        component={EditarPerfil} 
        options={{ title: 'Editar Perfil', headerStyle: { backgroundColor: colors.card }, headerTintColor: colors.text }} 
      />
    </Stack.Navigator>
  );
}

export default function navegacaoapp() {
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
          else if (route.name === 'Calendario') iconName = 'calendar';
          else if (route.name === 'Notificacoes') iconName = 'notifications';
          else if (route.name === 'Perfil') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tarefas" component={Tarefas} />
      <Tab.Screen name="Calendario" component={Calendario} />
      <Tab.Screen name="Notificacoes" component={Notificacoes} />
      <Tab.Screen name="Perfil" component={PerfilStack} />
    </Tab.Navigator>
  );
}
