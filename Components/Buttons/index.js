import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const Button = (props) => {
  
    const {type, content, onPress} = props;

    const backgroundColor = type === 'orderBtn' ? 'salmon' : 'gray';


    return (
        <View style={styles.container}>
           <Pressable
            style={[styles.btn, {backgroundColor: backgroundColor } ]}
            onPress={() => onPress()}
            >
             <Text style={styles.text} >{content}</Text>  
           </Pressable>
        </View>
    )
}

export default Button;
