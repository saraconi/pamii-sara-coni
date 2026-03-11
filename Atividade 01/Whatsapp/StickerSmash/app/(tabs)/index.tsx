import { View, Text, StyleSheet, FlatList, Image, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const chats = [
  {
    id: "1",
    name: "pietro",
    message: "estou com saudade de voce",
    time: "18:16",
    unread: 6,
    avatar: require("../../assets/images/1.jpg"),
  },
  {
    id: "2",
    name: "sarah",
    message: "esse trabalho vale mb",
    time: "17:54",
    unread: 4,
    avatar: require("../../assets/images/2.jpg"),
  },
  {
    id: "3",
    name: "julia",
    message: "gosto tanto desse professor",
    time: "17:51",
    unread: 246,
    avatar: require("../../assets/images/3.jpg"),
  },
  {
    id: "4",
    name: "Pedro",
    message: "Bora jogar gta online depois de...",
    time: "17:40",
    unread: 1,
    avatar: require("../../assets/images/4.jpg"),
  },
  {
    id: "5",
    name: "Mãe",
    message: "esse professor Joao Siles é muito bom né ",
    time: "17:35",
    unread: 0,
    avatar: require("../../assets/images/5.jpg"),
  },
  {
    id: "6",
    name: "João",
    message: "Cheguei aqui já",
    time: "17:30",
    unread: 3,
    avatar: require("../../assets/images/6.jpg"),
  },
  {
    id: "7",
    name: "Grupo Escola",
    message: "Prova de matemática amanhã",
    time: "17:10",
    unread: 12,
    avatar: require("../../assets/images/7.jpg"),
  },
  {
    id: "8",
    name: "Lucas",
    message: "kkkkkkkk",
    time: "16:58",
    unread: 0,
    avatar: require("../../assets/images/8.jpg"),
  },
  {
    id: "9",
    name: "Ana",
    message: "Te mando depois",
    time: "16:40",
    unread: 2,
    avatar: require("../../assets/images/9.jpg"),
  },
  {
    id: "10",
    name: "Trabalho",
    message: "Reunião às 19h",
    time: "16:10",
    unread: 5,
    avatar: require("../../assets/images/10.jpg"),
  },
];

export default function Conversas() {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="camera-outline" size={24} color="#fff" />
          <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#8696A0" />
        <TextInput
          placeholder="Pergunte à Meta AI ou pesquise"
          placeholderTextColor="#8696A0"
          style={styles.searchInput}
        />
      </View>

      {/* FILTER BUTTONS */}
      <View style={styles.filters}>
        <View style={styles.filterActive}>
          <Text style={styles.filterActiveText}>Todas</Text>
        </View>
        <View style={styles.filter}>
          <Text style={styles.filterText}>Não lidas 13</Text>
        </View>
        <View style={styles.filter}>
          <Text style={styles.filterText}>Favoritos</Text>
        </View>
        <View style={styles.filter}>
          <Text style={styles.filterText}>Grupos 9</Text>
        </View>
      </View>

      {/* CHAT LIST */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Image source={typeof item.avatar === "string" ? { uri: item.avatar } : item.avatar}
            style={styles.avatar}/>

            <View style={styles.chatInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>

            <View style={styles.right}>
              <Text style={styles.time}>{item.time}</Text>
              {item.unread > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.unread}</Text>
                </View>
              )}
            </View>
          </View>
        )}
      />

      {/* FLOATING BUTTON */}
      <View style={styles.fab}>
        <Ionicons name="add" size={28} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B141A",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202C33",
    marginHorizontal: 15,
    paddingHorizontal: 12,
    borderRadius: 25,
    height: 45,
    marginBottom: 10,
  },

  searchInput: {
    marginLeft: 8,
    color: "#fff",
    flex: 1,
  },

  filters: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 10,
    gap: 8,
  },

  filterActive: {
    backgroundColor: "#103629",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  filterActiveText: {
    color: "#25D366",
    fontWeight: "bold",
  },

  filter: {
    borderWidth: 1,
    borderColor: "#2A3942",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  filterText: {
    color: "#8696A0",
  },

  chatItem: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "#1f2c34",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 12,
  },

  chatInfo: {
    flex: 1,
  },

  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  message: {
    color: "#8696A0",
    marginTop: 4,
  },

  right: {
    alignItems: "flex-end",
  },

  time: {
    color: "#25D366",
    fontSize: 12,
  },

  badge: {
    backgroundColor: "#25D366",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 5,
  },

  badgeText: {
    color: "#000",
    fontWeight: "bold",
  },

  fab: {
    position: "absolute",
    bottom: 25,
    right: 20,
    backgroundColor: "#25D366",
    width: 57,
    height: 57,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});