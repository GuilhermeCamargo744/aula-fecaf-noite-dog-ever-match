import { ButtonCustom } from "@/src/components/buttonCustom"
import LottieView from "lottie-react-native"
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native"


export const InputScreen = () => {

        const handlePressButtonEntrar = () => {

        }

    return (
        <View
            style={styles.container}
        >
            <Text>Olá mundo</Text>
            {
                Platform.OS != "web" && 
                <LottieView
                    autoPlay
                    style={styles.animatedStyle}
                    source={require("../../lottieAnimated/animated-dog.json")}
                />
            }
            
            <ButtonCustom title="Cadastrar"/>
            <ButtonCustom 
                onPress={handlePressButtonEntrar}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingHorizontal: 28
    },
    animatedStyle: {
        height: 300,
        width: 300,
    }
})