import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import moment from 'moment';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Header = () => {
  const [clock, setClock] = useState(getCurrentClock());

  function getCurrentClock() {
    return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(getCurrentClock());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo Usuario !!!</Text>

      <View style={styles.content}>
        <Text style={styles.text}>Disponivel</Text>
        <Text style={styles.text}>Guardar</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.values}>R$ 1000.00</Text>
        <Text style={styles.values}>R$ 500.00</Text>
      </View>

      <View style={styles.clockContent}>
        <Text style={styles.clockText}>{clock}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a6f7f',
    paddingTop: StatusBarHeight - 25,
    paddingBottom: 44,
    height: '100%',
    borderRadius: 50,
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    fontVariant: 'small-caps',
    textShadowColor: '#f5f5f5',
    textShadowRadius: 10,
    textShadowOffset: { width: 5, height: 5 },
    paddingBottom: 20,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 18,
    paddingEnd: 17,
    paddingStart: 10,
  },
  values: {
    fontSize: 17,
    letterSpacing: 2,
  },
  clockContent: {
    paddingTop: 20,
    alignItems: 'center',
  },
  clockText: {
    fontSize: 20,
    color: '#ffffff',
  },
});
    
export default Header;
