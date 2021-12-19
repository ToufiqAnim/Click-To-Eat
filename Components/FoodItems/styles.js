import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    foodContainer:{
        width:'100%',
        height:'100%'
      },
        foodTitles:{
        padding:20,
        width:'100%',
        alignItems:'center',
        position:'absolute',
       backgroundColor: "rgba(108, 122, 137, .4)",
       bottom:'75%'
     
      },
      
      text:{
        fontSize:"3em",
        fontWeight: 500,
        color:'white',
       
      },
      subText:{
        fontSize:20,
        color:'white'
      },
      imgs:{
        width:'100%',
         height:'100%',
         resizeMode:'cover',
         position:'absolute'
      },
      btnContainer:{
          position:'absolute',
          bottom: 50,
          width:'100%'
      }
})

export default styles;

