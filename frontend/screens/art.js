import React ,{useState} from 'react';
import { StyleSheet, View, Text ,SafeAreaView, ScrollView,Image,TouchableOpacity} from 'react-native';

export default function Art(){
    const [list,setList] = useState([
        {key:"a1",item:"Coloring",pic:require('./assests/pictures/coloring.png')},
        {key:"a2",item:"Drawing",pic:require('./assests/pictures/drawing.png')},
    ])
    const pressHandlers = (key)=>{
        //console.log(key)
    }
    return(
        <View style={styles.mainContainer}>
         <SafeAreaView >
            <ScrollView >
            {list.map((x)=>{
                 var y=x.key
                    return (
                    <TouchableOpacity onPress={()=>pressHandlers(x.key)}>
                    <View style={styles[y]}>
                    <View style={styles.cardContent}>
                    <Image 
                     source={x.pic}
                     style={{ width: 200, height: 180 }}
                     />
                     <Text>{x.item}</Text>
                     </View>
                     </View>
                     </TouchableOpacity>  
                    )
            })}
            </ScrollView>
         </SafeAreaView>
        </View>
        )
}

const styles = StyleSheet.create({
    mainContainer:{
    marginTop:50,
    },
    a1:{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#2AC1DC',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6,
        width:250,
        marginLeft:80
    },
    a2:{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#ED1B24',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6,
        width:250,
        marginLeft:80
    },
    cardContent:{
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:35
    }
})