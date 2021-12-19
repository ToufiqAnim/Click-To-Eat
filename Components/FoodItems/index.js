import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles'
import Button from '../Buttons';
const FoodItem = (props) => {

  const {name, price, image} = props;
    return (
          
    <View style={styles.foodContainer}>
    <ImageBackground
    style={styles.imgs} 
      source={image}
    />
    <View style={styles.foodTitles}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.subText}>{price}</Text>
    </View>
    <View>
    </View>

   <View style={styles.btnContainer}>
   <Button type='orderBtn' 
    content={"Order Now"}
     onPress={() => {
       console.warn('Order Now Button was Pressed')
     }}/>
    <Button type='food Cart' 
    content={" Foods Cart"}
     onPress={() => {
       console.warn('Ordered Food Button was Pressed')
     }}/>
   </View>
  </View>
    )
}

export default FoodItem;

