import {createStackNavigator} from "@react-navigation/stack"; 
import Stats from "../pages/Stats";
import Home from "../pages/Home";
import Entry from "../pages/Entry";
import Invest from "../pages/Invest"
import Auth from "../pages/Authentication"

const Stack = createStackNavigator();

export default function StackRoutes() {
    return(
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#2a6f7f'}
      ,headerTransparent: true, title: '', headerTitleAlign: 'center'}}>
        {/* <Stack.Screen 
        name="Autentication"
        component={Auth}/> */}

        <Stack.Screen 
        name="Home" 
        component={Home} />

        <Stack.Screen
        name="Stats"
        component={Stats}
        options={{title: 'Gastos por categoria', headerStyle: {backgroundColor: '#f5f5f5'}}} />

        <Stack.Screen
        name="Entry"
        component={Entry}
        options={{title: 'Fazer Lançamento', headerStyle: {backgroundColor: 'black'}}} />

        <Stack.Screen
        name="Investments"
        component={Invest}
        options={{title: 'Central de investimentos', headerStyle: {backgroundColor: '#f5f5f5'}}} />
      </Stack.Navigator>

    )
    
}