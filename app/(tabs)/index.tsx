import { Image, StyleSheet, Text } from 'react-native';
import foto from "../../assets/images/foto.jpg";

export default function HomeScreen() {
  return (
    <div style={styles.box}>
      <Text>Index das tabs</Text>
      <Image style={styles.img} source={foto} alt='imagem'/>
    </div>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  },
  img: {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
