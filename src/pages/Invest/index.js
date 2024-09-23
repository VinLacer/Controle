import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function Invest() {

    return(
    <View style={styles.container}>
        <Text>
          TELA DE INVESTIMENTOS
        </Text>

    </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a6f7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
