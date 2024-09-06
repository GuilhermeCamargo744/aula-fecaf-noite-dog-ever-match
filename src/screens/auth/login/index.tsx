import { ButtonCustom } from "@/src/components/buttonCustom"
import { InputCustom } from "@/src/components/inputCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"



export const LoginScreen = () => {
    return(
        <View
            style={{
               flex: 1,
               paddingLeft: 24,
               paddingRight: 24,
               alignItems: "center",
            }}
        >
           <Text>
            DogEverMetch
            </Text>
            <InputCustom/> 
            <ButtonCustom
                title="Entrar"
                styleContainer={{
                    backgroundColor: colors.PRIMARY,
                    position: "absolute",
                    bottom: 0
                }}
                styleText={{
                    color: colors.WHITE
                }}
            />
        </View>
    )
}