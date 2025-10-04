import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao TaskMind!</Text>
      <Text style={styles.subtitle}>Organize suas tarefas e compromissos facilmente.</Text>
      
      {/* OBSERVAÇÃO BACKEND:
          aqui você pode buscar os dados de tarefas do usuário via API e exibir dinamicamente
          
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.text, marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, color: colors.textMuted, textAlign: 'center' }
});
