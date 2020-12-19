import { StyleSheet, Text, View, Image, FlatList,Button } from 'react-native';
import React, { useState,Component } from 'react';
import CategoryItem from './category-item-card'
import { senduser } from './redux/actions';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props)
            this.state = {
                result: [],
            }} 

    componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
        myHeaders.append("Cookie", "csrftoken=8D1Sq0vmt6e688rpIH6GYE3e7UPibIdjv3Adw5y7f0n4juVJLHgL6MBl0QdGYamu");
        myHeaders.append("Content-Type", "application/json");
    
    
        fetch("https://blackpearl2.ew.r.appspot.com/getid/", 
                {headers: myHeaders,
                redirect: 'follow'
                })
                .then(response => response.text())
                .then(result => {
                   fetch("https://blackpearl2.ew.r.appspot.com/users/"+result, {
                        headers: myHeaders,
                        redirect: 'follow'
                       })
                    .then(response => response.json())
                    .then(result => {this.props.senduser(result)})
                    .catch(()=> console.log('Err fetch user info'))
                })
                .catch(()=> console.log('Err fetch userid'))
      }

    render() {

    //navigation or props without {}
    const imgs = [
        { src: './assests/pictures/learn-card-blue.png', key: "1" ,nav:"Learn"},
        { src: './assests/pictures/art-card-green.png', key: "4" ,nav:"Art"},
        { src: './assests/pictures/videos-card-blue.png', key: "3" ,nav:"Videolists"},
        { src: './assests/pictures/albums-card-green.png', key: "2" ,nav:"Album"},
        { src: './assests/pictures/games-card-orange.png', key: "5" ,nav:"Games"},
    ]
    
    const pressHandler = (x) => {
        this.props.navigation.navigate(x)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={imgs}
                        renderItem={({ item }) => (
                            <CategoryItem item={item}  press={pressHandler}/> 
                        )}
                        numColumns={1}
                    />
                </View>
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: 'red',
        flex: 1
    },
    list: {
        flex: 1,
        backgroundColor: '#FFFACD'
    }
});

// Redux
const mapStateToProps = (state) => {
    return {
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      senduser: (z) => { dispatch(senduser(z)) },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);  
