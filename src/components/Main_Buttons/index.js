import React from "react";
import {View,
        TouchableOpacity,
        Text,
        StyleSheet} from "react-native";

import {Entypo, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Menu() {

    const navigation = useNavigation();

    return (
        <View style = {styles.content}>

            <TouchableOpacity activeOpacity = {0.7} style = {styles.button} 
            onPress={() => [navigation.navigate("Stats")]}>
                <Text style = {styles.buttonText}>
                    Situação atual 
                </Text>
                <MaterialIcons name="query-stats" size = {70} color = 'white'/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity = {0.7} style = {styles.button}
        onPress={ () => [navigation.navigate("Entry")]}>
            <Text style = {styles.buttonText}>
                Fazer lançamento
            </Text>
        <Entypo name="credit" size = {70} color = 'white'/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity = {0.7} style = {styles.button}
        onPress={ () => [navigation.navigate("Investments")]}>
            <Text style = {styles.buttonText}>
                Investimentos
            </Text>
        <Entypo name="bar-graph" size = {70} color = 'white'/>
        </TouchableOpacity>
    
        </View>
        )
    
}

const styles = StyleSheet.create({

    content:{
        alignItems: 'center',
        rowGap: 20,
        paddingTop: 10, 
        backgroundColor: '#f5f5f5',
        paddingBottom: 35
    },

    buttonText:{
        color: '#272727',
        fontSize: 30,
        fontFamily: 'notoserif',
        paddingBottom: 10
    },

    button:{
        padding:20,
        justifyContent: 'flex-start',
        backgroundColor: '#26b7a0',
        width: '95%',
        height: 'auto', 
        alignItems: 'center',
        borderRadius: 10,
    }
        
})