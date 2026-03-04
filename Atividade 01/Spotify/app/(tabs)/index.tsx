import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const playlists = [
  { id: '1', title: 'Descobertas da Semana' },
  { id: '2', title: 'Nightstorms' },
  { id: '3', title: 'Cool Down' },
  { id: '4', title: 'Music for a Workday' },
  { id: '5', title: 'The Stress Buster' },
  { id: '6', title: 'Happy Hits!' },
];

export default function SpotifyScreen() {
  return (
    <View style={styles.phoneContainer}>
      <StatusBar style="light" />

      <LinearGradient
        colors={['#1E2A3A', '#121212']}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>Bom Dia</Text>

          <FlatList
            data={playlists}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.gridItem}>
                <View style={styles.imagePlaceholder} />
                <Text style={styles.gridText} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
            )}
          />

          <Text style={styles.sectionTitle}>Tocado recentemente</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {playlists.map((item) => (
              <View key={item.id} style={styles.recentItem}>
                <View style={styles.recentImage} />
                <Text style={styles.recentText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

        </ScrollView>
      </LinearGradient>
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
    paddingTop: 60,
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
  imagePlaceholder: {
    width: 55,
    height: 55,
    backgroundColor: '#555',
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
  recentImage: {
    width: 120,
    height: 120,
    backgroundColor: '#444',
    borderRadius: 6,
    marginBottom: 5,
  },
  recentText: {
    color: 'white',
    fontSize: 12,
    width: 120,
  },
});