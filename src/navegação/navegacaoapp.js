import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/HomeScreen';
import TarefasScreen from '../screens/Main/TarefasScreen';
import CalendarioScreen from '../screens/Main/CalendarioScreen';
import NotificacoesScreen from '../screens/Main/NotificacoesScreen';
import PerfilScreen from '../screens/Main/PerfilScreen';
import colors from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.card },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home': iconName = 'home'; break;
            case 'Tarefas': iconName = 'checkmark-circle'; break;
            case 'Calendario': iconName = 'calendar'; break;
            case 'Notificacoes': iconName = 'notifications'; break;
            case 'Perfil': iconName = 'person'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tarefas" component={TarefasScreen} />
      <Tab.Screen name="Calendario" component={CalendarioScreen} />
      <Tab.Screen name="Notificacoes" component={NotificacoesScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
