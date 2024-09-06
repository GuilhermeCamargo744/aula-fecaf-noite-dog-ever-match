import { ButtonCustom } from "@/src/components/buttonCustom"
import { router } from "expo-router"
import { Platform, Text, View } from "react-native"
import LottieView from 'lottie-react-native';



export const InputScreen = () => {

        const handlePressButtonEntrar = () => {

        }

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                backgroundColor: "#fff",
               paddingHorizontal: 24
            }}
        >
            <Text>DogEverMatch</Text>
            {
                Platform.OS != "web" && 
                <LottieView
                    autoPlay
                        style={{
                        width: 250,
                        height: 250,
                        backgroundColor: '#eee',
                        marginBottom: 25,

                    }}
                    source={require('../../lottie/animated-dog.json')}
                />
            }
            
            <ButtonCustom title="Cadastrar"/>
            <ButtonCustom 
                onPress={() => router.navigate("/auth/login")}
                title={"Entrar"} 
                styleContainer={{
                    backgroundColor: "#FFC42D",
                    marginTop: 24
                }}
                styleText={{
                    color: "#fff"
                }}
            />
        </View>
    )
}