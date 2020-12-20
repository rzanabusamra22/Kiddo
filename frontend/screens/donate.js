import React, { useState } from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity,Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PaymentScreen from './Stripe/payment-screen'

export default function Donate(){
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
               <View style={styles.modalContent}> 
               <MaterialIcons 
                       name='close'
                       size={24} 
                       style={{...styles.modalToggle, ...styles.modalClose}} 
                       onPress={() => setModalOpen(false)} 
                     />
                   <PaymentScreen />
               </View>
           </Modal>
           <Text style={styles.text}>
            Thank You For Supporting 
           </Text>
           <Text style={styles.text2}>
            The Kiddo Community
           </Text>
           <Image
            style={styles.picture}
            source={{
            uri:
            'https://www.crisisservicescanada.ca/wp-content/uploads/2019/02/banner-update-08.png',
            }}
             />
            <View style={styles.buttonContainer}>
               <TouchableOpacity onPress={() => setModalOpen(true)}
                 style={styles.modalToggle}
                 style={styles.Btn}
                 >
                  <Text  style={styles.BtnText}>Donate Now</Text>
               </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
        picture: {
          width: "100%",
          height: "45%",
        },container: { flex: 1, backgroundColor: 'white', justifyContent: 'center'},
        text:{
        fontWeight: 'bold',
        textAlign:'center',
        color:'#2b31ae',
        fontSize:30
        },
        text2:{
        fontWeight: 'bold',
        textAlign:'center',
        color:'#2b31ae',
        fontSize:25,
        },
        buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        },
        Btn: {
        width: "80%",
        borderRadius: 25,
        backgroundColor: '#f4511e',
        height: 50,
        marginTop: 5,
        },
        BtnText: {
        marginTop:10,
        color: "#fff",
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20
        },
        modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
          },
        modalClose: {
        marginTop: 20,
        marginBottom: 0,
          },
        modalContent: {
        flex: 1,
          }
})

