import { PieChart} from 'react-native-gifted-charts';
import {useEffect ,useState } from 'react';

const pizzaData = [
  {text: 'Pepperoni', value: 40, color: '#FF6347' },
  {text: 'Margherita', value: 30, color: '#FFD700' },
  {text: 'BBQ Chicken', value: 20, color: '#8A2BE2' },
  {text: 'Veggie', value: 10, color: '#32CD32' },
];

export default function Pizza() {

    return (
            <PieChart showText
              textColor='black'
              radius={150}
              textSize={13 }
              focusOnPress
              extraRadiusForFocused={10}
              data={pizzaData}
              // onPress={(item) => Updatecategory(item.category)} 
               />
    )  
}