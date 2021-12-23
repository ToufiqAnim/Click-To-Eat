import react from 'react';
import { View,  FlatList,Dimensions} from 'react-native'
import FoodItem from '../FoodItems/FoodItem';
import foods from '../FoodList/foods'

import styles from './style';
const FoodList = (props) => {
    console.log(foods)
    return (
      <View style ={styles.container}>
      <FlatList
        data={foods}

        renderItem={({item}) => <FoodItem food={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
    )
}

export default FoodList;
