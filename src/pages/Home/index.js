import { StyleSheet, View } from 'react-native';
import Header from "../../components/Main_Header";
import Menu from '../../components/Main_Buttons';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header/>
        <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a6f7f',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: "25%"
  },
});