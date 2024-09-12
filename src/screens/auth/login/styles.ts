import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
        alignItems: "center",
    },
    styleTitle: {
        fontSize: 44,
        fontWeight: "bold",
        marginTop: 24,
        color: colors.PRIMARY
    }
})