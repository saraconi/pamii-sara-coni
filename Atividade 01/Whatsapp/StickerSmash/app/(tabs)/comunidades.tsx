import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Comunidades() {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Comunidades</Text>
        <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* NOVA COMUNIDADE */}
        <View style={styles.newCommunity}>
          <View style={styles.iconBox}>
            <Ionicons name="people" size={28} color="#ccc" />
            <View style={styles.plusIcon}>
              <Ionicons name="add" size={16} color="#000" />
            </View>
          </View>
          <Text style={styles.newCommunityText}>Nova comunidade</Text>
        </View>

        {/* PRIMEIRA COMUNIDADE */}
        <View style={styles.communityBlock}>
          <View style={styles.communityHeader}>
            <Image
              source={ require("../../assets/images/turma.jpeg") }
              style={styles.communityAvatar}
            />
            <Text style={styles.communityTitle}>3° DA</Text>
          </View>

          <View style={styles.divider} />

          {/* Avisos */}
          <View style={styles.chatItem}>
            <View style={styles.greenIcon}>
              <Ionicons name="megaphone" size={20} color="#fff" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.chatName}>Avisos</Text>
              <Text style={styles.chatMsg}>
                ~ Daniel adicionou o grupo "Organização ca..."
              </Text>
            </View>

            <Text style={styles.time}>11/02/2026</Text>
          </View>

          {/* Grupo */}
          <View style={styles.chatItem}>
            <Image
              source={ require("../../assets/images/turma.jpeg") }
              style={styles.avatar}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.chatName}>3° DA</Text>
              <Text style={styles.chatMsg}>
                +55 11 93702-1453: Figurinha
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.time}>17:50</Text>
              <Ionicons name="volume-mute" size={16} color="#8696a0" />
            </View>
          </View>

          {/* Grupo 2 */}
          <View style={styles.chatItem}>
            <Image
              source={ require("../../assets/images/licoes.png") }
              style={styles.avatar}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.chatName}>Lições BNC</Text>
              <Text style={[styles.chatMsg, { fontStyle: "italic" }]}>
                +55 11 94943-8374: Mensagem apagada
              </Text>
            </View>

            <Text style={styles.time}>13/02/2026</Text>
          </View>

          <Text style={styles.verTodos}>Ver todos</Text>
        </View>

        {/* SEGUNDA COMUNIDADE */}
        <View style={styles.communityBlock}>
          <View style={styles.communityHeader}>
            <Image
              source={ require("../../assets/images/ushar.jpg") }
              style={styles.communityAvatar}
            />
            <Text style={styles.communityTitle}>Comunidade u-Shar</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.chatItem}>
            <View style={styles.greenIcon}>
              <Ionicons name="megaphone" size={20} color="#fff" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.chatName}>Avisos</Text>
              <Text style={styles.chatMsg}>
                +55 11 99237-0220: ULTIMO DIA para faze...
              </Text>
            </View>

            <Text style={styles.time}>10/01/2025</Text>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={ require("../../assets/images/ushar.jpg") }
              style={styles.avatar}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.chatName}>
                Hackaton ETEC – Out/24 – Tur...
              </Text>
            </View>

            <Text style={styles.time}>11/01/2025</Text>
          </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="pencil" size={22} color="#fff" />
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
  newCommunity: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#202c33",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  plusIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#25D366",
    borderRadius: 10,
    padding: 2,
  },
  newCommunityText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  communityBlock: {
    marginBottom: 25,
  },
  communityHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  communityAvatar: {
    width: 55,
    height: 55,
    borderRadius: 15,
    marginRight: 12,
  },
  communityTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#202c33",
    marginBottom: 15,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  greenIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#1f5c4d",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
  },
  chatName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  chatMsg: {
    color: "#8696a0",
    marginTop: 4,
  },
  time: {
    color: "#8696a0",
    fontSize: 12,
  },
  verTodos: {
    color: "#8696a0",
    marginTop: 5,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 40,
    backgroundColor: "#202c33",
    width: 55,
    height: 55,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});