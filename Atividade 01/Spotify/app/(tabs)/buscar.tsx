import { View, Text, StyleSheet } from 'react-native';

export default function Buscar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Busca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});