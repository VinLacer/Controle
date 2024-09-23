import {StyleSheet, TouchableOpacity, Text} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

export default function FastEntry({name, icon}) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.title}>
                {name}
            </Text>
            {icon}
        </TouchableOpacity>

        )           
}

const styles = StyleSheet.create({
    button: {
        width: '45%',
        height: '100%',
        backgroundColor: '#26b7a0',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        rowGap: 10
    },

    title: {
        alignContent: 'center',
        fontFamily: 'notoserif',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        justifyContent: 'center'
    }
})