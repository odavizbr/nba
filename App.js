import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  // Dados fictícios da NBA
  const jogosNBA = [
    { id: '1', casa: 'Lakers', fora: 'Warriors', placar: '112 - 108' },
    { id: '2', casa: 'Celtics', fora: 'Bulls', placar: '120 - 105' },
    { id: '3', casa: 'Heat', fora: 'Nets', placar: '99 - 101' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Últimos Jogos da NBA 🏀</Text>

      <FlatList
        data={jogosNBA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.time}>{item.casa} vs {item.fora}</Text>
            <Text style={styles.placar}>{item.placar}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
  },
  placar: {
    fontSize: 16,
    color: '#555',
  },
});
