import { TextInput, View, Text } from "react-native"
import { styles } from "./styles"



export const InputCustom = () => {
    return(
        <View style={styles.styleContainer}>
            <Text>TESTE</Text>
            <TextInput
                style={styles.styleInput}
            />
        </View>
    )
}