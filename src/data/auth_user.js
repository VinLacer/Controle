import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoogleAuth from "./google_auth";

export default function Authentication({userInfo, setUserInfo}) {
    const[button, setButton] = useState();
    const navigation = useNavigation();

    function LogOut() {
        setUserInfo(null);
        AsyncStorage.removeItem("@user");
    }
    
    useEffect(() => {
        const LoadUserData = async () => {
            try{
                const storedUserData = await AsyncStorage.getItem("@user");
                if (storedUserData){
                    setUserInfo(JSON.parse(storedUserData));
                    setButton(
                        <View>

                            <TouchableOpacity activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => [navigation.navigate("Home")]}>
                                <Text style={styles.buttonText}>
                                        Prosseguir para aplicativo
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7}
                            style={styles.button}
                            onPress={LogOut}>
                                <Text style={styles.buttonText}>
                                        LogOut
                                </Text>
                            </TouchableOpacity>

                        </View>
                    )
                }

                else{
                    setButton(<GoogleAuth setUserInfo={setUserInfo}/>)
                }
            }catch(error){
                console.log('Failed to load user data: ', error)
            }
        }

        LoadUserData();
    },[userInfo]);

    return(button);
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column'
    },

    buttonText:{
        color: '#272727',
        fontSize: 16,
        fontFamily: 'notoserif',
        paddingBottom: 5
    },

    button:{
        justifyContent: 'center',
        backgroundColor: '#26b7a0',
        width: 350,
        height: 50, 
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    }

})