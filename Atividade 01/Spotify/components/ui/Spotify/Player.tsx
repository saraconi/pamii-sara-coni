import { View, Text, StyleSheet, Image } from "react-native";

export default function Player(){
  return(
    <View style={styles.player}>
      <Image
        source={require("../../../assets/images/iconmusica2.png")}
        style={styles.playerImage}
      />

      <View style={{flex:1}}>
        <Text style={styles.playerTitle}>Longe de mim</Text>
        <Text style={styles.playerArtist}>🄴 Kyan, MU540</Text>
        <Text style={styles.playerDevice}>JBL Partybox 320</Text>
      </View>

      <Text style={styles.pause}>II</Text>
    </View>
  )
}

const styles = StyleSheet.create({

player:{
  position:"absolute",
  bottom:0,
  left:0,
  right:0,
  height:70,
  backgroundColor:"#181818",
  borderTopWidth:1,
  borderTopColor:"#2a2a2a",
  flexDirection:"row",
  alignItems:"center",
  paddingHorizontal:10
},

playerImage:{
  width:40,
  height:40,
  borderRadius:4,
  marginRight:10
},

playerTitle:{
  color:"white",
  fontSize:13,
  fontWeight:"600"
},

playerArtist:{
  color:"#cfcfcf",
  fontSize:12
},

playerDevice:{
  color:"#1DB954",
  fontSize:11
},

pause:{
  color:"white",
  fontSize:20,
  paddingHorizontal:10
}

})