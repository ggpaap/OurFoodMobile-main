import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    fotoCategoria: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    card: {
        width: "100%",
        margin: 5,
        height: 100,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    nomeCategoria: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "600",
    },
    infos: {
        justifyContent: "center",
    },
    btn: {
        backgroundColor: "#FF842B",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        zIndex: 5,
    }
});

export default styles