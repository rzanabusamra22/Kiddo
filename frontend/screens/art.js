import React ,{useState} from 'react';
import { StyleSheet, View, Text ,SafeAreaView, ScrollView,Image,TouchableOpacity} from 'react-native';

export default function Art({ navigation }){
    const [list,setList] = useState([
        {nav:"Coloring",key:"a1",item:"Coloring",pic:{uri: 'https://imgur.com/0r8qpuJ.png'}},
        {nav:"Drawing",key:"a2",item:"Drawing",pic:{uri: 'https://imgur.com/Hsm0YR5.png'}},
    ])
    const pressHandler = (x) => {
        navigation.navigate(x)
        console.log(x)
    }
    return(
        <View style={styles.mainContainer}>
         <SafeAreaView >
            <ScrollView >
            {list.map((x,i)=>{
                 var y=x.key
                    return (
                    <TouchableOpacity onPress={()=>pressHandler(x.nav)} key={i}>
                    <View style={styles[y]}>
                    <View style={styles.cardContent}>
                    <Image 
                     source={x.pic}
                     style={{ width: 200, height: 180 }}
                     />
                     <Text style={styles.text}>{x.item}</Text>
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
        marginLeft:80,
        marginTop:33
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
    },
    text:{
        color:'#fff',
        fontSize:25,
        fontWeight: "bold",
        marginTop:20,
    }
})