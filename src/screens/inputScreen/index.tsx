import { ButtonCustom } from "@/src/components/buttonCustom"
import { router } from "expo-router"
import { Text, View } from "react-native"


export const InputScreen = () => {

        const handlePressButtonEntrar = () => {

        }

    return (
        <View>
            <Text>Olá mundo</Text>
            <ButtonCustom title="Cadastrar"/>
            <ButtonCustom 
                onPress={() => router.navigate("/auth/login")}
                title={"Entrar"} 
                styleContainer={{
                    backgroundColor: "#FFC42D"
                }}
                styleText={{
                    color: "#fff"
                }}
            />
        </View>
    )
}