import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 24,

    },
    contentInputs: {
        width: "100%",
    },
    styleTitle: {
        fontSize: 44,
        fontWeight: "bold",
        marginTop: 24,
        color: colors.PRIMARY
    }
})