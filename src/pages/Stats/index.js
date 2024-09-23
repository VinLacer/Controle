import { View, StyleSheet} from "react-native";
import Pizza from "../../components/Pizza_graph";
import Lista from "../../components/List";
import { useState, useEffect } from "react";


export default function Home() {
    return (
      <View style={styles.container}>
        <View style={styles.teste}> 

          <Pizza/>
          <Lista/>

        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a6f7f',
      alignItems: 'center',
    },

    teste:{
      backgroundColor: '#2a6f7f',
      paddingTop: 60
    }

});
     