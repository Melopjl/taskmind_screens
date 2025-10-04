import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../tema/cores';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao TaskMind!</Text>
        <Text style={styles.subtitle}>Organize suas tarefas e compromissos facilmente.</Text>
      </View>

      {/* Botões inferiores */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Tarefas')}
        >
          <Text style={styles.buttonText}>Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.background, // fundo suave
    justifyContent:'space-between',
    padding:20,
  },
  content: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    fontSize:28,
    fontWeight:'bold',
    color: colors.text,
    textAlign:'center',
    marginBottom:10,
  },
  subtitle: {
    fontSize:16,
    color: colors.textMuted,
    textAlign:'center',
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:20,
  },
  button: {
    backgroundColor: colors.accent, // cor de destaque
    paddingVertical:12,
    paddingHorizontal:30,
    borderRadius:10,
  },
  buttonText: {
    color: colors.card, // texto branco no botão
    fontSize:16,
    fontWeight:'bold',
  },
});
