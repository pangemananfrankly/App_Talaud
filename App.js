

import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import Menu from './screens/Menu'; 
import TranslateMenu from './translate/Home'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';



 

const Stack = createStackNavigator({
  Home:{screen: Menu},
  HomeTranslated: { screen: TranslateMenu }
}
,{

  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({ 
    headerTitle: (
      
    <Text 
      style={{
        fontSize: 20, 
        color: '#862a5c',
        fontWeight: 'bold'
             
        }}>
        TALAUD</Text>
     
    ),
    headerRight: (
   
      <TouchableOpacity
         onPress={() => {
           navigation.navigate("HomeTranslated")
         }
        }
      >
        <Image
          source={require('./assets/translate.png')}
        />
      </TouchableOpacity>


    ),
    headerLeft:(
    <TouchableOpacity
         onPress={() => {
           navigation.navigate("Home")
         }
        }
      >
      <Image
      style={{
        width: 70,
        height: 60,

      }}
      source={require('./assets/IconLogo.png')} />
      </TouchableOpacity>
    ),
    headerStyle:{ backgroundColor: "#f6cd61"}
    
  })
 
})




export default createAppContainer (Stack);
