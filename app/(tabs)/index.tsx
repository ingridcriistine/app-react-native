import { Image, StyleSheet, Text } from 'react-native';
import foto from "@/assets/images/foto.jpg";

export default function HomeScreen() {
  return (
    <>
      <Text>Turma mara</Text>
      <Image style={styles.img} source={foto} alt='imagem'/>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
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
    width: 400,
    height: 600
  }
});
