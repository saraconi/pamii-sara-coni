import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Biblioteca() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Topo Música / Podcasts */}
        <View style={styles.topTabs}>
          <Text style={styles.topActive}>Música</Text>
          <Text style={styles.topInactive}>Podcasts</Text>
        </View>

        {/* Sub Abas */}
        <View style={styles.subTabs}>
          <Text style={styles.subActive}>Playlists</Text>
          <Text style={styles.subInactive}>Artistas</Text>
          <Text style={styles.subInactive}>Álbuns</Text>
        </View>

        {/* Criar Playlist */}
        <View style={styles.item}>
          <View style={styles.createBox}>
            <Text style={styles.plus}>+</Text>
          </View>
          <Text style={styles.itemTitle}>Criar playlist</Text>
        </View>

        {/* Músicas Curtidas */}
        <View style={styles.item}>
          <View style={styles.likedBox}>
            <Text style={styles.heart}>♥</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Músicas Curtidas</Text>
            <Text style={styles.subText}>967 músicas</Text>
          </View>
        </View>

        {/* Playlist 1 */}
        <View style={styles.item}>
          <Image
            source={require("../../assets/images/Playlist1.jpg")
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>Brazil 2020</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

        {/* Playlist 2 */}
        <View style={styles.item}>
          <Image
            source={require("../../assets/playlist2.jpg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>WORK 2020</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

        {/* Playlist 3 */}
        <View style={styles.item}>
          <Image
            source={require("../../assets/playlist3.jpg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>2019 🌞🧡</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

      </ScrollView>

      {/* Player Fixo */}
      <View style={styles.player}>
        <Image
          source={require("../../assets/images")  
          style={styles.playerImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.playerTitle}>
            Best Friends, Right? • Amy Winehouse
          </Text>
          <Text style={styles.playerSub}>
            MACBOOK PRO DE ISADORA
          </Text>
        </View>
        <Text style={styles.pause}>II</Text>
      </View>
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

  topTabs: {
    flexDirection: "row",
    marginBottom: 15,
  },

  topActive: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 15,
  },

  topInactive: {
    color: "gray",
    fontSize: 22,
    fontWeight: "bold",
  },

  subTabs: {
    flexDirection: "row",
    marginBottom: 25,
  },

  subActive: {
    color: "white",
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#1DB954",
    paddingBottom: 5,
  },

  subInactive: {
    color: "gray",
    marginRight: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  cover: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 15,
  },

  itemTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  subText: {
    color: "gray",
    fontSize: 13,
  },

  createBox: {
    width: 60,
    height: 60,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderRadius: 4,
  },

  plus: {
    color: "white",
    fontSize: 28,
  },

  likedBox: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },

  heart: {
    color: "white",
    fontSize: 22,
  },

  player: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#282828",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  playerImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  playerTitle: {
    color: "white",
    fontSize: 13,
  },

  playerSub: {
    color: "#1DB954",
    fontSize: 11,
  },

  pause: {
    color: "white",
    fontSize: 18,
    paddingHorizontal: 10,
  },

});