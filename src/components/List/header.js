import {Text, View, StyleSheet} from 'react-native';

export default function HeaderList() {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    CATEGORIA
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },

    content: {
        justifyContent: 'center',
    },

    text: {
        fontSize: 16,
    }
})