import { useLinkProps } from '@react-navigation/native';
import React, { useState,Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList,Button } from 'react-native';
import { senduser } from './redux/actions';
import { connect } from 'react-redux';
import CategoryItem from './category-item-card'
// import LottieView from 'lottie-react-native';


class Home extends Component {
    constructor({ navigation }) {
        
        super({ navigation })
        this.state = {
            result: [],

        }
    } 

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
    const [imgs, setImg] = useState([
        { src: require('./assests/pictures/learn-card-blue.png'), key: "1" ,nav:"Learn"},
        { src: require('./assests/pictures/art-card-green.png'), key: "4" ,nav:"Art"},
        { src: require('./assests/pictures/videos-card-blue.png'), key: "3" ,nav:"Videolists"},
        { src: require('./assests/pictures/albums-card-green.png'), key: "2" ,nav:"Album"},
        { src: require('./assests/pictures/games-card-orange.png'), key: "5" ,nav:"Games"},
    ])
    const pressHandler = (x) => {
        navigation.navigate(x)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.list}>
                {/* <LottieView source={require('./assests/pictures/17629-all-together.json')} autoPlay loop /> */}
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
        // paddingTop: 10,
        // backgroundColor: 'blue',
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