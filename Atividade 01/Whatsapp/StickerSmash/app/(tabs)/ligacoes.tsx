import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const callsData = [
  { id: "1", name: "Gui (2)", time: "Hoje 12:43", type: "missed",  avatar: require("../../assets/images/joaogui.jpg") },
  { id: "2", name: "Thiago", time: "Hoje 07:14", type: "received",  avatar: require("../../assets/images/thiago.jpg")  },
  { id: "3", name: "Gui", time: "Ontem 20:46", type: "missed",  avatar: require("../../assets/images/joaogui.jpg")  },
  { id: "4", name: "Gui", time: "Ontem 18:15", type: "made",  avatar: require("../../assets/images/joaogui.jpg")  },
  { id: "5", name: "Gui (2)", time: "Ontem 18:04", type: "missed",  avatar: require("../../assets/images/joaogui.jpg")  },
  { id: "6", name: "Irmã (2)", time: "Ontem 17:49", type: "made",  avatar: require("../../assets/images/lara.jpg")  },
  { id: "7", name: "Thiago", time: "Ontem 07:17", type: "missed",  avatar: require("../../assets/images/thiago.jpg")  },
  { id: "8", name: "Gui (7)", time: "2 de março 22:01", type: "missed",  avatar: require("../../assets/images/joaogui.jpg")  },
];

export default function Ligacoes() {
  const renderItem = ({ item }) => (
    <View style={styles.callItem}>
      <Image
      source={item.avatar}
      style={styles.avatar}/>

      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.name,
            item.type === "missed" && { color: "#ff4d4d" },
          ]}
        >
          {item.name}
        </Text>

        <View style={styles.row}>
          <Ionicons
            name={
              item.type === "made"
                ? "arrow-up"
                : item.type === "received"
                ? "arrow-down"
                : "arrow-down"
            }
            size={16}
            color={
              item.type === "missed"
                ? "#ff4d4d"
                : "#25D366"
            }
            style={{ marginRight: 5 }}
          />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>

      <Ionicons name="call-outline" size={22} color="#fff" />
    </View>
  );

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Ligações</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="search" size={24} color="#fff" />
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color="#fff"
            style={{ marginLeft: 15 }}
          />
        </View>
      </View>

      {/* BOTÕES SUPERIORES */}
      <View style={styles.topButtons}>
        {[
          { icon: "call-outline", label: "Ligar" },
          { icon: "calendar-outline", label: "Programar" },
          { icon: "keypad-outline", label: "Teclado" },
          { icon: "heart-outline", label: "Favoritos" },
        ].map((btn, index) => (
          <View key={index} style={styles.topButtonItem}>
            <View style={styles.topIcon}>
              <Ionicons name={btn.icon} size={22} color="#fff" />
            </View>
            <Text style={styles.topLabel}>{btn.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.section}>Recentes</Text>

      <FlatList
        data={callsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {/* FAB Edit */}
      <TouchableOpacity style={styles.fabEdit}>
        <Ionicons name="pencil" size={20} color="#fff" />
      </TouchableOpacity>

      {/* FAB Call */}
      <TouchableOpacity style={styles.fabCall}>
        <Ionicons name="call" size={26} color="#000" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b141a",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  topButtonItem: {
    alignItems: "center",
  },
  topIcon: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: "#1f2c34",
    justifyContent: "center",
    alignItems: "center",
  },
  topLabel: {
    color: "#8696a0",
    marginTop: 8,
  },
  section: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  time: {
    color: "#8696a0",
  },
  fabEdit: {
    position: "absolute",
    right: 24,
    bottom: 110,
    backgroundColor: "#202c33",
    width: 52,
    height: 52,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  fabCall: {
    position: "absolute",
    right: 20,
    bottom: 40,
    backgroundColor: "#25D366",
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});