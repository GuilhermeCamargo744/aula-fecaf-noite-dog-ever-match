import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"



export const LoginScreen = () => {
    return(
        <View>
           <Text>
            DogEverMetch
            </Text> 
            <ButtonCustom
                title="Entrar"
                styleContainer={{
                    backgroundColor: colors.PRIMARY
                }}
                styleText={{
                    color: colors.WHITE
                }}
            />
        </View>
    )
}