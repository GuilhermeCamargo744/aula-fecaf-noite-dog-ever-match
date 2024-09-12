import { TextInput, View, Text } from "react-native"
import { styles } from "./styles"

interface IProps {
    title: string;
    onChangeText: (value: string) => void
}

export const InputCustom = ({title, onChangeText}: IProps) => {
    return(
        <View style={styles.styleContainer}>
            <Text>{title}</Text>
            <TextInput
                style={styles.styleInput}
                onChangeText={onChangeText}
            />
        </View>
    )
}