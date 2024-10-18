import { View, Text } from "react-native";
import { Link } from "expo-router";


export default function Register() {
    return(
        <>
            <Link href={"/"}>VOLTAR AO LOGIN</Link>
            <View>
                <Text>Cadastro de usuário</Text>
            </View>
        </>
    )
}