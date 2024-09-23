import { View, StyleSheet, Text} from "react-native";
import FastEntry from "../../components/Usual_expenses";
import { MaterialCommunityIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";


export default function Entry() {
    return (
      <View style={styles.container}>

        <View style={styles.item}>
          <FastEntry name={'Almoço Rock in Grill'} 
          icon={<MaterialCommunityIcons name="silverware-fork-knife" size={25}/>}/>

          <FastEntry name={'Almoço Estilo'} 
          icon={<MaterialCommunityIcons name="silverware-fork-knife" size={25}/>}/>
        </View>

        <View style={styles.item}>
          <FastEntry name={'Crédito Celular'} 
          icon={<FontAwesome name="mobile-phone" size={25}/>}/>

          <FastEntry name={'Doca Dog'}
          icon={<FontAwesome5 name="hotdog" size={25}/>}/>
        </View>

        <View style={styles.item}>
          <FastEntry name={'Passagem de Onibus'}
          icon={<FontAwesome5 name="bus" size={25}/>}/>

          <FastEntry name={"Gasolina \n R$50,00"}
          icon={<FontAwesome name="car" size={25}/>}/>
        </View>
          
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a6f7f',
      paddingTop: 100,
      rowGap: 30
    },
    item: {
      flexDirection: 'row',
      backgroundColor: '#2a6f7f',
      width: '100%',
      height: '15%',
      justifyContent: 'space-around'
    }
  });
     