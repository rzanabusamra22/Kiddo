import React ,{useState} from 'react';
import { StyleSheet, View, Text ,SafeAreaView, ScrollView,Image,TouchableOpacity} from 'react-native';

export default function Learn({ navigation }){
    const [list,setList] = useState([
        {nav:"Alphabet",key:"a1",item:"Alphabet",pic:require('./assests/pictures/Letters.png')},
        {nav:"Numbers",key:"a2",item:"Numbers",pic:require('./assests/pictures/Numbers.png')},
        {nav:"BodyPart",key:"a3",item:"Body Parts",pic:require('./assests/pictures/Body-parts.png')},
        {nav:"Fruits",key:"a4",item:"Fruits",pic:require('./assests/pictures/Fruits.png')},
        {nav:"Vegatables",key:"a5",item:"Vegetables",pic:require('./assests/pictures/Vegatabels.png')},
        {nav:"Colors",key:"a6",item:"Colors",pic:require('./assests/pictures/Colors.png')},
        {nav:"Animals",key:"a7",item:"Animals",pic:require('./assests/pictures/Animals.png')}
    ])
    const pressHandler = (x) => {
        navigation.navigate(x)
        //console.log(x)
    }
        return(
            <View style={styles.mainContainer}>
             <SafeAreaView >
                <ScrollView >
                {list.map((x,i)=>{
                     var y=x.key
                        return (
                        <TouchableOpacity onPress={()=>pressHandler(x.nav) } key={i}>
                        <View style={styles[y]}>
                        <View style={styles.cardContent}>
                        <Text>{x.item}</Text>
                        <Image 
                         source={x.pic}
                         style={{ width: 90, height: 45 }}/>
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
        fontFamily:'font2',
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#2AC1DC',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a2:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#773EA9',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a3:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#EA3A7A',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a4:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#F88408',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a5:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#79C24D',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a6:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'#ED1B24',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    a7:{
        borderRadius:6,
        elevation:3,
        shadowOffset: {width:1, height:1},
        backgroundColor:'gold',
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:18,
        // marginHorizontal:20,
        // marginVertical:35
    }
})