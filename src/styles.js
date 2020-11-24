import { StyleSheet } from "react-native";


export const colors = {
    "red": "#ea0b3f",
    "dark-red": "#732b3e",
    "gray": "#686c58",
    "green": "#6dbb30",
    "background": "#253a49",
    "buttonBackground":"#18655b",
}
export const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        flex: 1,
    },
    setContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewLine: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    inputSection:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    textinputIcon:{
        padding:10
    },
    textInput: {
        flex: 1,
        borderColor: "white",
        borderWidth: 3,
        marginLeft: -50,
        marginRight: 30,
        height: 60,
        marginTop: 5,
        textAlign: "center",
        borderRadius: 15,
        color:"white",
        fontSize:30,
    },
    text: {
        flex: 1,
        marginLeft: 70
    },
    icon:{
        flex:1,
        marginLeft: 70,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    TouchableOpacity: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 50,
        alignItems: "center",
        marginTop: 30,
        backgroundColor: colors.buttonBackground,
        borderRadius:15
    }
});