import {View, Text, StyleSheet} from "react-native";
import React, {useContext} from "react";
import Authentication from "../../data/auth_user";
import{ AuthContext } from "../../context/auth";

export default function Auth() {
    const {userInfo, setUserInfo} = useContext(AuthContext);



    return (
        <View style={styles.container}>
            <Authentication userInfo={userInfo} setUserInfo={setUserInfo}/>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a6f7f',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 55,
    },
  });