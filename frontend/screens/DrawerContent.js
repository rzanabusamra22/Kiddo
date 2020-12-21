//Admin Is signedin
import React from 'react';
import { View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import RNRestart from 'react-native-restart';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

class DrawerContent extends React.Component{
  constructor(props){
    super(props)
      this.state={
        user: {username:'user', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FMgEe33BwCdnfLO89QdJEYxWMgc9I982fw&usqp=CAU'}
        ,flag:0
      }
  }
  
  ///////////////////////////////////////////////////////////

  signOutHandler = async () => {
    console.log('*****************************************')
    console.log(AsyncStorage.getItem('@token'))
   await AsyncStorage.removeItem('@token')
   console.log(AsyncStorage.getItem('@token'))
   await AsyncStorage.removeItem('@user') 
   //
   RNRestart.Restart();
};
    render(){
    return(
        <View style={{flex:1}}>
              <DrawerContentScrollView {...this.props}>
                <View style={styles.drawerContent}>
                    <View  style={styles.userInfoSection}>
                      <View style={{flexDirection:'row',marginTop: 15}}>
                      <Avatar.Image 
                                source={{
                                  uri: this.props.user?.thumbnail
                                }}
                                size={50}
                            />
                            <View  style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title} >{this.props.user?.username}</Title>
                        
                                {this.props.user?.is_staff? <Caption style={styles.caption} > Admin </Caption>
                                :  <Caption style={styles.caption} > User </Caption>  
                              }
                               
                            </View>
                      </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {this.props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {this.props.navigation.navigate('parentProfile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="gift-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Donate"
                            onPress={() => {this.props.navigation.navigate('Donate')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-star-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="History"
                            onPress={() => {this.props.navigation.navigate('History')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView >
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {this.signOutHandler()}}
                />
            </Drawer.Section>
        </View>
    )
}}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

// Redux
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);  
