
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import userprofile from './About';
import touristAttraction from './TouristAttraction';
import costumHome from './CostumHome';
import traditionalClothes from './TraditionalClothes';
import history from './History';




class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
     
      <View style={styles.conteiner}>
        
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View style={styles.box1}>
            
          </View>,
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
  if (routeName == 'History') {
    iconName = `ios-globe`;
  }
  if (routeName == 'TraditionalClothes') {
    iconName = `ios-shirt`;
  } if (routeName == 'CostumHome') {
    iconName = `md-home`;
  } if (routeName == 'TouristAttraction') {
    iconName = `ios-pin`;
  } if (routeName == 'About') {
    iconName = `ios-information-circle`;}

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};


const Home = createBottomTabNavigator({
 
History: {  
  screen: history

},
TraditionalClothes: { screen: traditionalClothes },
CostumHome: { screen: costumHome },
TouristAttraction: { screen: touristAttraction },
About : {screen:userprofile},
// Cerita: { screen: Cerita },

 },
 {
   //tampilan awal sejarah
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

