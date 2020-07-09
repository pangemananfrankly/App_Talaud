
import React from 'react';
import { View, Text, StyleSheet,Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import UserProfileView from './About';
import Tempatwisata from './Tempatwisata';
import Rumahadat from './Rumahadat';
import Pakaianadat from './Pakaianadat';
import SejarahTalaud from './Sejarah';
import home from './Home'






class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={styles.conteiner}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View style={styles.box1}>
            <Text style={styles.text}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
     
    );
  }
}



const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if(routeName == 'HOME'){
    iconName = `ios-home`;
  }
  if (routeName == 'SEJARAH') {
    iconName = `ios-globe`;
  }
  if (routeName == 'PAKAIANADAT') {
    iconName = `ios-shirt`;
  } if (routeName == 'RUMAHADAT') {
    iconName = `md-home`;
  } if (routeName == 'TEMPATWISATA') {
    iconName = `ios-pin`;
  } if (routeName == 'ABOUT') {
    iconName = `ios-information-circle`;}

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};





const Home = createBottomTabNavigator({

 HOME : {screen: home},
SEJARAH: {screen: SejarahTalaud},
PAKAIANADAT: { screen: Pakaianadat },
RUMAHADAT: { screen: Rumahadat },
TEMPATWISATA: { screen: Tempatwisata },
ABOUT : {screen:UserProfileView},

 },
 {
   //tampilan tab bar icon
   defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ focused, tintColor }) =>
       getTabBarIcon(navigation, tintColor),
   }),
   tabBarOptions: {
     activeTintColor: 'tomato',
     inactiveTintColor: 'gray',
   }

  })






export default createAppContainer(Home);



const styles = StyleSheet.create({
conteiner: {
  backgroundColor: 'red',
    width: 24,
    height: 24,
     margin: 5
},
box1: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center'
},
text: {
  color: 'white', fontSize: 10, fontWeight: 'bold'
},

})
// 

