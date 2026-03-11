import { Image, StyleSheet } from "react-native";

export default function UserAvatar() {
  return (
    <Image
      source={require("../../../assets/images/iconusuario.jpg")}
      style={styles.avatar}
    />
  );
}

const styles = StyleSheet.create({
  avatar:{
    width:40,
    height:40,
    alignItems:"center",
    borderRadius:20,
    marginRight:20 
  }
});