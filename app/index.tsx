import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from 'react-native';
import foto from "../assets/images/react-logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //   const [count, setCount] = useState(0);
  //   const onPress = () => setCount(prevCount => prevCount + 1);

  const onPress = () => {
    router.push("/(tabs)");
  };

  console.log(email, pass);
  console.log(typeof email, typeof pass);

  return (
    <LinearGradient
      colors={["#47D4FFFF", "#22A3CAFF", "#7131D6FF", "#771EC0FF"]}
      style={styles.background}
    >
      <SafeAreaView style={styles.box}>
        <Image style={styles.img} source={foto} alt='imagem'/>
        <View style={styles.boxLogin}>
            <Text style={styles.title}>Login</Text>
            <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPass}
                value={pass}
                placeholder="Insira sua senha"
                keyboardType="default"
                secureTextEntry={true}
            />
            <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
            </View>
            <View>
            {/* <View>
                    <Text>Count: {count}</Text>
                </View> */}
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View>
            <Link href={"/register"} style={styles.cadastrar}>Cadastrar novo usuário</Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  box: {
    display: "flex",
    justifyContent: 'space-around',
    alignItems: "center",
    height: "100%",
  },
  boxLogin: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 25
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "gray",
    width: 300,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: "#090909FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 5,
    width: 100,
    paddingVertical: 6,
  },
  btnText: {
    fontFamily: "Poppins",
    color: "white",
  },
  label: {
    display: "flex",
    justifyContent: "flex-start",
    color: 'white',
    marginTop: 10
  },
  esqueciSenha: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white',
    fontSize: 11,
    marginBottom: 15
  },
  cadastrar: {
    color: 'white',
    fontSize: 12
  },
  img: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
