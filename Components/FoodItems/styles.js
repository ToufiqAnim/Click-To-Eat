import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    foodContainer:{
        width:'100%',
        height: Dimensions.get('window').height,
      },
    foodTitles:{
        /* padding:20,
        width:'100%',
        alignItems:'center',
        
       
       bottom:'75%', */
       marginTop: '30%',
      width: '100%',
      alignItems: 'center',
      backgroundColor: "rgba(108, 122, 137, .2)",
     position:'absolute',bottom:'25%',
      },
      
      text:{
        fontSize:48,
        fontWeight: "500",
        color:'white',
       
      },
      subText:{
        fontSize:20,
        color:'white'
      },
      imgs:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      btnContainer:{
          position:'absolute',
          bottom: 50,
          width:'100%'
      }
})

export default styles;

