import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

// ""mock" de tarefas o backend deve retornar algo similar:

// [
//   { id: '1', title: 'Estudar modelagem', status: 'pendente' },
//   { id: '2', title: 'Fazer exercícios', status: 'finalizado' },
// ]
const tarefasMock = [
  { id: '1', title: 'Estudar modelagem', status: 'pendente' },
  { id: '2', title: 'Fazer exercícios de matemática', status: 'finalizado' },
  { id: '3', title: 'Ler capítulo de história', status: 'não feito' },
];

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  // aqui pode buscar as tarefas do backend
  
  useEffect(() => {
    setTarefas(tarefasMock);
  }, []);

  const renderItem = ({ item }) => {
    let statusColor;
    if (item.status === 'success') statusColor = colors.success;
    else if (item.status === 'pending') statusColor = colors.pending;
    else statusColor = colors.danger;

    return (
      <View style={[styles.card, { borderLeftColor: statusColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.status, { color: statusColor }]}>{item.status.toUpperCase()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />
      {/* OBSERVAÇÃO BACKEND:
          Cada tarefa deve ter: id, título, status, data, e possivelmente descrição.
          Backend pode fornecer endpoints para criar, editar e deletar tarefas.
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  card: { backgroundColor: colors.card, padding: 15, borderRadius: 10, marginBottom: 15, borderLeftWidth: 5 },
  title: { fontSize: 16, fontWeight: 'bold', color: colors.text },
  status: { marginTop: 5, fontWeight: 'bold' }
});
