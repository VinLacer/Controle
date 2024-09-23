import {Text, FlatList, StyleSheet, View} from 'react-native';
import HeaderList from './header';
import { useEffect, useState } from 'react';

const foodData = [
    { id: '1', name: 'Apple', cost: '$1.00' },
    { id: '2', name: 'Banana', cost: '$0.50' },
    { id: '3', name: 'Carrot', cost: '$0.30' },
    { id: '4', name: 'Donut', cost: '$1.50' },
    { id: '5', name: 'Egg', cost: '$0.20' },
    { id: '6', name: 'Fish', cost: '$3.00' },
    { id: '7', name: 'Grapes', cost: '$2.00' },
    { id: '8', name: 'Hamburger', cost: '$5.00' },
    { id: '9', name: 'Ice Cream', cost: '$2.50' },
    { id: '10', name: 'Juice', cost: '$1.20' },
  ];

const Item = ({name, cost}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.cost}>{cost}</Text>
    </View>
  );

  
export default function List() {

    return(
            <View style={styles.container}>
                <HeaderList TITLE={"category"}/>
                <FlatList
            ItemSeparatorComponent={<View style={styles.separator} />}
            data={foodData}
            renderItem={({item}) => <Item name={item.name} cost={item.cost}/>}
            keyExtractor={item => item.id}
            // extraData={range} for update the list
            />
          
            </View>     
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
        alignItems: 'center',
        width: '90%', 
        borderRadius: 10 
    },
    item: {
        flex: 1,
        backgroundColor: '#26b7a0',
        padding: 15,
        justifyContent: 'space-between',
        width: 330,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row'
        

    },
    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },

    separator:{
        height: 2,
        backgroundColor: 'black',
        marginHorizontal: 10,
    },
    cost: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    }
})
