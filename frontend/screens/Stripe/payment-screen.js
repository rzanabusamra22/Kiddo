import React, { useState, useEffect} from 'react'
import { StyleSheet,Button, View, Text, TouchableOpacity, TextInput } from 'react-native'
import  PaymentView  from './payment-view'

const PaymentScreen = () => {
    const [response, setResponse ] = useState()
    const [amount, onChangeAmount] = useState('');
    const [username, onChangeName] = useState('')
    const [ makePayment, setMakePayment ] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')

    const onCheckStatus =  (paymentResponse) => {
        setPaymentStatus('Thank you for supporting, Please wait while confirming your donation!')
        setResponse(paymentResponse)
        let jsonResponse = JSON.parse(paymentResponse);
        // perform operation to check payment status
    
      
        var raw = JSON.stringify({
        "authToken": jsonResponse.token.id,
        "username":username,
        "amount":parseInt(amount)});
    
        var myHeaders = new Headers();
        
   myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        fetch("http://blackpearl2.ew.r.appspot.com/donate/", requestOptions)
        .then((res)=> res.text())
        .then(stripeResponse =>{
        
            if(stripeResponse) {
                    setPaymentStatus('Donation Success')
                }else{
                    setPaymentStatus('Donation failed due to some issue')
                }
        })
        .catch( (error)=> {
            setPaymentStatus(' Payment failed due to some issue')
        })
       }
        
    const paymentUI = () => {
        if(!makePayment){
            return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text style={{ fontSize: 30, margin: 10,fontWeight:'200'}}> Donation Information </Text>
                    <TextInput
                        style={[styles.textInput, { fontWeight: "200", fontSize: 20 }]}
                        onChangeText={text => onChangeName(text)}
                        value={username} placeholder='Donator Name'
                    /> 
                    <TextInput
                        style={[styles.textInput, { fontWeight: "200", fontSize: 20 }]}
                        onChangeText={text => onChangeAmount(text)}
                        value={amount} placeholder=' $ Donation Amount'
                    /> 
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            setMakePayment(true)
                        }}
                        >
                        <Text style={{fontSize:20,fontWeight:'bold'}}>
                            Proceed Donation
                        </Text>
                    </TouchableOpacity>
                </View>
            // show to make payment
        }else{
            if(response !== undefined){
         
                return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text style={{ fontSize: 25, margin: 10}}> { paymentStatus} </Text>
                </View>
            }else{
             
                return <PaymentView onCheckStatus={onCheckStatus}  amount={amount} username={username}/>
            }
        }
    }
    return (<View style={styles.container}>
                {paymentUI()}
            </View>)
}

const styles = StyleSheet.create({
container: { flex: 1, paddingTop: 100, backgroundColor: 'white', justifyContent: 'center'},
navigation: { flex: 2 },
    textInput:{
      height:50,
      width:350,
      borderRadius:25,
      borderWidth:0.5,
      marginHorizontal:20,
      paddingLeft:10,
      marginVertical:5,
      borderColor:'rgba(0,0,0,0.2)'
    },
    button: {
      backgroundColor: 'white',
      height: 70,
      width:350,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      shadowOffset:{width:2,height:2},
      shadowColor:'black',
      shadowOpacity:0.2
   },
body: { flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' },
footer: { flex: 1, backgroundColor: 'cyan' }
})

export default PaymentScreen;
