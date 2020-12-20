import React, { Component, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity,FlatList  } from 'react-native';
import { Dimensions } from 'react-native';
import { sendcoloring } from '../redux/actions';
import { connect } from 'react-redux';

//To make the styleing responsive 
const wind = Dimensions.get('window');
var vw = wind.width * 0.01
var vh = wind.height * 0.01
class Coloring extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
        }
    }
    componentDidMount() {
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        //fetch the data from deployed db.
        fetch("https://blackpearl2.ew.r.appspot.com/plays/?category=color", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    result
                })
            })
            .catch(error => console.log('error', error));
    }
    //To dynamic rendaring of the values.
    render() {
        const navigation = this.props.navigation
        const sendcoloring = this.props.sendcoloring
        const anygame=this.state.result
         return (
             <FlatList
             data ={anygame}
             renderItem={({item})=>(
                         <TouchableOpacity onPress={() =>{ 
                            sendcoloring(item.link);
                              navigation.navigate('Game')
                              }}  style={{ marginLeft: vw * 7, marginTop: 6 * vh, height: 25 * vh, width: 40 * vw }}>
                             <Image style={{ borderRadius: 15, height: "100%", width: "100%" }}  source={{ uri: item?.thumbnail }} />
                         </TouchableOpacity>
                     )
                  }
             keyExtractor={(item,i)=>{return `${i}`}}
             numColumns = {2}
         />
         );
                 }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    img: {
        width: 120,
        height: 120
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "black",
        marginBottom: 40
    },
    inputView: {
        backgroundColor: "#dcdcdc",
        width: "80%",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "black",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        borderColor: 'black',
        backgroundColor: 'pink',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "black"
    }
});

// Redux
const mapStateToProps = (state) => {
    return {
       coloringlink: state.coloringlink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      sendcoloring: (z) => { dispatch(sendcoloring(z)) },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Coloring);  