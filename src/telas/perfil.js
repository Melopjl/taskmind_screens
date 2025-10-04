import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../../theme/colors';

export default function Perfil({ navigation }) {
  // infos de usuario, backend deve fornecer dados reais
  const [user, setUser] = useState({
    name: 'João Melo',
    email: 'joao@email.com',
    school: 'Universidade XYZ',
    image: null,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')} style={styles.imageWrapper}>
        {user.image ? (
          <Image source={{ uri: user.image }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Selecionar Foto</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.label}>Email: {user.email}</Text>
      <Text style={styles.label}>Faculdade/Escola: {user.school}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditarPerfil')}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* OBSERVAÇÃO BACKEND:
          Backend deve fornecer:
          - foto do usuário (URL)
          - nome, email, faculdade/escola
          - a possibilidade de atualizar dados via API ou algo diferente
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20, alignItems: 'center' },
  imageWrapper: { backgroundColor: colors.card, width: 120, height: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  imageText: { color: colors.textMuted },
  image: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.text, marginBottom: 5 },
  label: { fontSize: 16, color: colors.textMuted, marginBottom: 5 },
  button: { backgroundColor: colors.accent, padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center', width: '100%' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
