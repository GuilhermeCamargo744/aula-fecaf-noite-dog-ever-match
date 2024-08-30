import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        height:53,
        width: Dimensions.get("screen").width * 0.9,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 37,
        borderRadius: 8
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})
