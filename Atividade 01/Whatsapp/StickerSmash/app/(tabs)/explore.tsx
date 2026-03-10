import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const statusData = [
  { id: "1", name: "Danilo Barbeiro", image: require("../../assets/images/danilo.jpg")},
  { id: "2", name: "Tuca Filha", image: require("../../assets/images/tuca.jpg")},
];

const canaisData = [
  { id: "1", name: "Netflix Brasil", msg: "Escolha só uma pra poder ver pro...", time: "18:01", badge: "217", image: require("../../assets/images/netflixcerto.png")},
  { id: "2", name: "Mercado Livre", msg: "Hoje tem futebol! Vai um cupom s...", time: "18:00", badge: "228", image: require("../../assets/images/mercadolivre.jpg") },
  { id: "3", name: "ge.globo | Santos", msg: "VEJA MOTIVOS Lateral Aderlan c...", time: "16:46", badge: "296", image: require("../../assets/images/ge.png") },
];

export default function Atualizacoes() {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Atualizações</Text>
        <View style={styles.icons}>
          <Ionicons name="search" size={24} color="#fff" />
          <Ionicons name="ellipsis-vertical" size={24} color="#fff" style={{ marginLeft: 15 }} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* STATUS */}
        <Text style={styles.sectionTitle}>Status</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          
          {/* Adicionar Status */}
          <View style={styles.statusCard}>
            <View>
              <Image
                source={ require("../../assets/images/eu.jpg") }
                style={styles.statusImage}
              />
              <View style={styles.plusIcon}>
                <Ionicons name="add" size={18} color="#000" />
              </View>
            </View>
            <Text style={styles.statusText}>Adicionar status</Text>
          </View>

          {statusData.map((item) => (
            <View key={item.id} style={styles.statusCard}>
              <Image
              source={typeof item.image === "string" ? { uri: item.image } : item.image}
              style={styles.statusImage}/>
              <Text style={styles.statusText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* CANAIS */}
        <View style={styles.canaisHeader}>
          <Text style={styles.sectionTitle}>Canais</Text>
          <TouchableOpacity style={styles.descobrirBtn}>
            <Text style={{ color: "#fff" }}>Descobrir</Text>
          </TouchableOpacity>
        </View>

        {canaisData.map((item) => (
          <View key={item.id} style={styles.chatItem}>
            <Image
              source={typeof item.image === "string" ? { uri: item.image } : item.image}
              style={styles.image}/>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.msg}>{item.msg}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.time}>{item.time}</Text>
              <View style={styles.badge}>
                <Text style={{ color: "#000", fontWeight: "bold" }}>{item.badge}</Text>
              </View>
            </View>
          </View>
        ))}

      </ScrollView>

      {/* BOTÕES FLUTUANTES */}
      <TouchableOpacity style={styles.fabEdit}>
        <MaterialCommunityIcons name="pencil" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.fabCamera}>
        <Ionicons name="camera" size={22} color="#000" />
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
  icons: {
    flexDirection: "row",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  statusCard: {
    alignItems: "center",
    marginRight: 15,
    width: 80,
  },
  statusImage: {
    width: 70,
    height: 100,
    borderRadius: 15,
  },
  statusImageBorder: {
    width: 70,
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#25D366",
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  plusIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#25D366",
    borderRadius: 15,
    padding: 2,
  },
  canaisHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descobrirBtn: {
    backgroundColor: "#202c33",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
  },
  msg: {
    color: "#8696a0",
  },
  time: {
    color: "#25D366",
    fontSize: 12,
  },
  badge: {
    backgroundColor: "#25D366",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 5,
  },
  fabEdit: {
    position: "absolute",
    right: 20,
    bottom: 110,
    backgroundColor: "#202c33",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  fabCamera: {
    position: "absolute",
    right: 20,
    bottom: 40,
    backgroundColor: "#25D366",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
    image: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 12,
  }
});