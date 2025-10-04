import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: colors.text },
  input: { width: '100%', padding: 15, borderRadius: 10, backgroundColor: colors.card, marginBottom: 15, color: colors.text },
  button: { width: '100%', padding: 15, borderRadius: 10, backgroundColor: colors.accent, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: colors.accent, marginTop: 10 }
});
