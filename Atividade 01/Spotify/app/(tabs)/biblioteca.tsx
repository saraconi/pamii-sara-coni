import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Player from "../../components/ui/Spotify/Player";
import UserAvatar from "../../components//ui/Spotify/UserAvatar";

export default function Biblioteca() {
  return (
    <View style={styles.container}>
     <ScrollView
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ paddingBottom: 120 }}
     >
        <View style={styles.headerRow}>
          <UserAvatar/>
          <Text style={styles.title}>Sua biblioteca</Text>
        </View>

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
            source={require("../../assets/images/Playlist1.jpg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>VibeTrap</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

        {/* Playlist 2 */}
        <View style={styles.item}>
          <Image
            source={require("../../assets/images/playlist2.jpeg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>Champion</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

        {/* Playlist 3 */}
        <View style={styles.item}>
          <Image
            source={require("../../assets/images/playlist3.jpeg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>🌞🧡</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

         <View style={styles.item}>
          <Image
            source={require("../../assets/images/Aranha.jpg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>Sauce</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

         <View style={styles.item}>
          <Image
            source={require("../../assets/images/mpbplaylist.jpg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>MPB</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

         <View style={styles.item}>
          <Image
            source={require("../../assets/images/esteticarara.jpg")}
            style={styles.cover}
          />
          <View>
            <Text style={styles.itemTitle}>Estética Rara</Text>
            <Text style={styles.subText}>de Sara Souza</Text>
          </View>
        </View>

      </ScrollView>
      <Player/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
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

  player:{
  position:"absolute",
  bottom:0,
  left:0,
  right:0,
  height:70,
  backgroundColor:"hsl(0, 0%, 0%)",
  flexDirection:"row",
  alignItems:"center",
  paddingHorizontal:10
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

  headerRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    marginBottom:20
},

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

});