import React from 'react';
import { View, Image , Text} from 'react-native';
import styles from './styles';


const Header = () => {
    return (
        <View style={styles.container}>
            <Text style= {styles.text}>Click To Eat</Text>
            {/* <Image style={styles.logo} source ={require('../../images/menu.png')}/> */}
        </View>
    )
}

export default Header
