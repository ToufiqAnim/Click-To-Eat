import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top:30,
        zIndex: 1,
        justifyContent: 'flex-start',
        alignItems:'flex-start'
    },
    text:{
        width:"100%",
        height: 20,
        color:'salmon',
        fontSize: 40,
        fontWeight:'bold'
    },
    /* menu:{
        width:25,
        height: 25,
        resizeMode: 'contain',
    } */
});

 export default styles;
