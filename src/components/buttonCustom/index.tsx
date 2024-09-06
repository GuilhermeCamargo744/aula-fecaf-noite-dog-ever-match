import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { styles } from "./styles"

interface IProps {
    styleContainer?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
    title: string;
    onPress: () => void
}

export const ButtonCustom = ({
    styleContainer,
    styleText,
    title,
    onPress
}: IProps) => {
    return(
            <TouchableOpacity onPress={onPress} style={[styles.container, styleContainer]}>
                    <Text style={[styleText, styles.title]}>{title}</Text>
            </TouchableOpacity>
    )
}