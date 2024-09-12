import { ButtonCustom } from "@/src/components/buttonCustom"
import { router } from "expo-router"
import { Platform, Text, View } from "react-native"
import LottieView from 'lottie-react-native';
import { styles } from "./styles";



export const InputScreen = () => {

    const handlePressButtonEntrar = () => {

    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.styleTitle}>
                DogEverMatch
            </Text>
            {
                Platform.OS != "web" && 
                <LottieView
                    autoPlay
                    style={styles.styleAnimation}
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