import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Player from "../../components/ui/Spotify/Player";
import UserAvatar from "../../components//ui/Spotify/UserAvatar";

const { width } = Dimensions.get('window');

const playlists = [
  { id: '1', title: 'Sauce', image: require('../../assets/images/Aranha.jpg') },
  { id: '2', title: 'VibeTrap', image: require('../../assets/images/Playlist1.jpg') },
  { id: '3', title: '🌞🧡', image: require('../../assets/images/playlist3.jpeg') },
  { id: '4', title: 'Estética Rara', image: require('../../assets/images/esteticarara.jpg') },
  { id: '5', title: 'MPB', image: require('../../assets/images/mpbplaylist.jpg') },
  { id: '6', title: 'Champion!', image: require('../../assets/images/playlist2.jpeg') },

  { id: '7', title: 'Rock Classics', image: require('../../assets/images/rockplaylist.jpg') },
  { id: '8', title: 'LoFi Beats', image: require('../../assets/images/lofiplaylist.jpg') },
  { id: '9', title: 'Pop Mix', image: require('../../assets/images/popplaylist.jpg') },
  { id: '10', title: 'Samba', image: require('../../assets/images/sambaplaylist.jpg') },
  { id: '11', title: 'Reagge', image: require('../../assets/images/reaggeplaylist.jpg') },
  { id: '12', title: 'Sertanejo', image: require('../../assets/images/sertanejoplaylist.jpg') },


  { id: '13', title: 'Hip Hop Vibes', image: require('../../assets/images/hiphopplaylist.jpg') },
  { id: '14', title: 'Jazz Nights', image: require('../../assets/images/jazzplaylist.jpg') },
  { id: '15', title: 'Indie Mix', image: require('../../assets/images/indieplaylist.jpg') },
  { id: '16', title: 'Funk', image: require('../../assets/images/funkplaylist.jpg') },
  { id: '17', title: 'Blues', image: require('../../assets/images/bluesplaylist.jpg') },
  { id: '18', title: 'R&B', image: require('../../assets/images/rbplaylist.jpg') },



  { id: '19', title: 'Eletrônica', image: require('../../assets/images/eletronicaplaylist.jpg') },
  { id: '20', title: 'Rap Nacional', image: require('../../assets/images/rapplaylist.jpg') },
  { id: '21', title: 'Trap Brasil', image: require('../../assets/images/trapplaylist.jpg') },
  { id: '22', title: 'Tango', image: require('../../assets/images/tangoplaylist.jpg') },
  { id: '23', title: 'Axé', image: require('../../assets/images/axeplaylist.jpg') },
  { id: '24', title: 'Reggaeton', image: require('../../assets/images/reaggaetonplaylist.jpg') },

];

export default function SpotifyScreen() {
  return (
    <View style={styles.phoneContainer}>
      <StatusBar style="light" />

      <LinearGradient
        colors={['#1E2A3A', '#121212']}
        style={styles.container}
      >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:120}}
      >

          <View style={styles.filters}>
            <UserAvatar/>
              <Text style={styles.filterActive}>Tudo</Text>
              <Text style={styles.filter}>Música</Text>
              <Text style={styles.filter}>Podcasts</Text>
          </View>

          {/* GRID SUPERIOR */}

          <FlatList
            data={playlists.slice(0,6)}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.gridItem}>
                <Image source={item.image} style={styles.gridImage} />
                <Text style={styles.gridText} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
            )}
          />

          {/* TOCADOS RECENTEMENTE */}

          <Text style={styles.sectionTitle}>Tocados recentemente</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {playlists.slice(0,6).map((item) => (
              <View key={item.id} style={styles.recentItem}>
                <Image source={item.image} style={styles.recentImage} />
                <Text style={styles.recentText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          {/* RECOMENDADO PARA VOCÊ */}

          <Text style={styles.sectionTitle}>Recomendado para você</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {playlists.slice(6,12).map((item) => (
              <View key={item.id} style={styles.recentItem}>
                <Image source={item.image} style={styles.recentImage} />
                <Text style={styles.recentText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          {/* FEITO PARA VOCÊ */}

          <Text style={styles.sectionTitle}>Feito para você</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {playlists.slice(12,18).map((item) => (
              <View key={item.id} style={styles.recentItem}>
                <Image source={item.image} style={styles.recentImage} />
                <Text style={styles.recentText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          {/* DESCUBRA */}

          <Text style={styles.sectionTitle}>Descubra algo novo</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {playlists.slice(18,24).map((item) => (
              <View key={item.id} style={styles.recentItem}>
                <Image source={item.image} style={styles.recentImage} />
                <Text style={styles.recentText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

        </ScrollView>

      </LinearGradient>
      <Player/>
    </View>



  );
}

const styles = StyleSheet.create({
  phoneContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    paddingTop: 50, 
    paddingHorizontal: 15,
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  gridItem: {
    backgroundColor: '#2A2A2A',
    width: width / 2 - 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    borderRadius: 6,
    overflow: 'hidden',
  },
  gridImage: {
    width: 55,
    height: 55,
  },
  gridText: {
    color: 'white',
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 13,
    fontWeight: '600',
  },
  recentItem: {
    marginRight: 15,
  },
  recentImage:{
  width:120,
  height:120,
  borderRadius:6,
  marginBottom:5,
  shadowColor:"#000",
  shadowOpacity:0.4,
  shadowRadius:6
  },
  recentText: {
    color: 'white',
    fontSize: 12,
    width: 120,
  },

  headerRow:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:15,
    gap:10
    },

filters:{
    flexDirection:"row",
    marginBottom:10,
    height: 31
},

filterActive:{
    backgroundColor:"#1DB954",
    color:"white",
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:20,
    marginRight:10,
    fontWeight: "bold"
},

filter:{
    backgroundColor:"#2a2a2a",
    color:"white",
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:20,
    marginRight:10,
    fontWeight: "bold"
},
});