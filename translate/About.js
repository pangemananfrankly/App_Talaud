import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert
} from 'react-native';

export default class UserProfileView extends Component {

  _onPress= (text) =>{
  Alert.alert("Talaud Mobile Application",`Version 1.0.0`)
}

  render() {
    return (
   
      <View style={styles.container}>
             <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/profil.jpg')}/>
                <Text style={styles.name}>Frankly Smit Pangemanan </Text>
                <Text style={styles.userInfo}>s21610184@student.unklab.ac.id </Text>
                <Text style={styles.userInfo}>Talaud </Text>
            </View>
          </View>

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/reno.jpg')}/>
                <Text style={styles.name}>Renoreins Rumegang</Text>
                <Text style={styles.userInfo}>s1410309@student.unklab.ac.id </Text>
                <Text style={styles.userInfo}>Talaud </Text>
            </View>
          </View >

           <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/Advicor.png')}/>
                
                <Text style={styles.name}>Stenly Ibrahim Adam</Text>
                <Text style={styles.userInfo}>Dosen / Advicor</Text>
                <Text style={styles.userInfo}>stenly.adam@unklab.ac.id</Text>
                <Text style={styles.userInfo}>S.Kom, Universitas Klabat, Indonesia </Text>
                <Text style={{fontSize: 12,color:'#778899'}}>M.Sc, National Taiwan University of Science and Technology, Taiwan R.O.C</Text>
                <Text style={styles.userInfo}>Num: +62 431 - 891035</Text>   
            </View>

          </View >
          </ScrollView>

          <View style={styles.body}>
          <Button
          onPress={() =>this._onPress('data')}
           title="info"

          />
        

      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor: "#f6cd61",
  },
  headerContent:{
    
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    
    backgroundColor: "#DCDCDC",
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  container:{
    flex:1
  }
});
 