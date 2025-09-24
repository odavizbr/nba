import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Animated,
} from 'react-native';

export default function App() {
  // Dados fictícios de transferências
  const transferencias = [
    { id: '1', jogador: 'Damian Lillard', de: 'Portland Trail Blazers', para: 'Milwaukee Bucks' },
    { id: '2', jogador: 'Chris Paul', de: 'Phoenix Suns', para: 'Golden State Warriors' },
    { id: '3', jogador: 'Bradley Beal', de: 'Washington Wizards', para: 'Phoenix Suns' },
  ];

  // Animação simples de clique
  const escalaAnimada = useRef(new Animated.Value(1)).current;

  const animarClique = () => {
    Animated.sequence([
      Animated.timing(escalaAnimada, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(escalaAnimada, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Transferências Recentes da NBA 🏀</Text>

      <FlatList
        data={transferencias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View style={[styles.card, { transform: [{ scale: escalaAnimada }] }]}>
            <Text style={styles.jogador}>{item.jogador}</Text>
            <Text style={styles.info}>
              {item.de} ➝ {item.para}
            </Text>

            <Pressable
              onPress={animarClique}
              style={({ pressed }) => [
                styles.botao,
                { backgroundColor: pressed ? '#1976D2' : '#2196F3' },
              ]}
            >
              <Text style={styles.textoBotao}>Ver Detalhes</Text>
            </Pressable>
          </Animated.View>
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
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  jogador: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  info: {
    fontSize: 15,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
