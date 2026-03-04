import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

export default function Buscar() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={styles.title}>Buscar</Text>

        {/* Barra de pesquisa */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="O que você quer ouvir?"
            placeholderTextColor="#555"
            style={styles.input}
          />
        </View>

        <Text style={styles.section}>
          Navegar por todas as seções
        </Text>

        {/* Grid de categorias */}
        <View style={styles.grid}>
          <View style={[styles.card, { backgroundColor: "#E13300" }]}>
            <Text style={styles.cardText}>Podcasts</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#7358FF" }]}>
            <Text style={styles.cardText}>Eventos</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#1DB954" }]}>
            <Text style={styles.cardText}>Lançamentos</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#B02897" }]}>
            <Text style={styles.cardText}>Funk</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#0A9396" }]}>
            <Text style={styles.cardText}>Pop</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#BB3E03" }]}>
            <Text style={styles.cardText}>Sertanejo</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  searchBox: {
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 25,
  },

  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },

  input: {
    flex: 1,
    paddingVertical: 10,
  },

  section: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 100,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    justifyContent: "flex-end",
  },

  cardText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});