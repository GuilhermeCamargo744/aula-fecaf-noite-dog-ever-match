import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
       paddingHorizontal: 24
    },
    styleAnimation: {
        width: 250,
        height: 250,
        backgroundColor: '#eee',
        marginBottom: 25,
    },
    styleTitle: {
        fontWeight: "bold",
        fontSize: 44,
        color: colors.PRIMARY,
        marginBottom: 24
    }
})