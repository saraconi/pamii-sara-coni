import { View, Text, StyleSheet } from 'react-native';

export default function Biblioteca() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sua Biblioteca</Text>
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