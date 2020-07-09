import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: '1. Aplikasi ini di buat untuk memperkenalkan adat istiadat dan pariwisata di kepulauan Talaud,\n' +
    '2. Aplikasi ini mendukung dua bahasa yaitu Indonesia dan English.',
  web: 'Selamat Datang Diaplikasi Pengenalan Kebudayaan Suku Talaud,\n',
});


   

export default class App extends Component {

  

  render() {
    return (

      

      <View style={styles.container}>
      <View>
      
      </View>

        <View style={{flex:0.1,alignItems: 'center', width: 440, height:1 }}>
        <Text style={styles.welcome}>
          Selamat Datang Di Aplikasi Pengenalan Kebudayaan Talaud!! </Text>
        <Text style={styles.welcome}>
         Welcome to the Talaud Culture Introduction Application !!
        </Text>
         </View>
       <View style={{height: 60, alignItems: 'center'}} ></View>


        <View style={{flex: 1, textAlign: 'center'}}>
        <View style= {{flex: 1, width: 400}}>
        <ScrollView style={{flex: 1}}>
        
        <Text >
         Instruksi Aplikasi (About):
        </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>
       
        
        <Image source={require('../assets/home/gam1.png')} style={{width: 80, height:70}}/>
        <Text style={styles.instructions}>
          Klik ikon di samping kiri atas, untuk mengubah bahasa inggris ke bahasa Indonesia. (Click the icon on the top left to change English to Indonesian.)
        </Text> 

        <Image source={require('../assets/home/icon/translate.png')} style={{width: 80, height:70}}/>
        <Text style={styles.instructions}>
          Klik ikon di samping kanan atas, untuk mengubah bahasa Indonesia ke bahasa inggris. (Click the icon on the top right, to change Indonesian to English.)
        </Text>

        <Image source={require('../assets/home/icon/sejarah.png')} style={{width: 80, height:70}}/>
        <Text style={styles.instructions}>
          Klik ikon di samping kanan bawah, untuk melihat sejarah kepulauan Talaud. (Click the icon on the bottom right, to see the history of the Talaud islands.)
        </Text>

        <Image source={require('../assets/home/icon/baju.png')} style={{width: 80, height:70}}/>
        <Text style={styles.instructions}>
          Klik ikon di samping ikon sejarah, untuk melihat informasi pakaian adat. (Click the icon next to the historical icon, to see custom clothing information.)
        </Text>

        <Image source={require('../assets/home/icon/rumah.png')} style={{width: 80, height:70}}/>
        <Text style={styles.instructions}>
          Klik ikon di samping Pakaian adat, untuk melihat informasi rumah adat. (Click the icon next to Custom clothing, to see custom home information.)
        </Text> 

        <Image source={require('../assets/home/icon/tempat.png')} style={{width: 80, height:70}}/>
        <Text style={styles.instructions}>
          Klik ikon di samping kanan rumah adat, untuk melihat informasi tempat wisata. (Click the icon on the right side of the custom house, to see tourist information.)
        </Text>

         <Image source={require('../assets/home/icon/tentang.png')} style={{width: 80, height:70}}/>
        <Text style={styles.instructions}>
          Klik ikon di samping kanan tempat wisaata, untuk melihat informasi pembuat Aplikasi. (Click the icon on the right side of the tourist attractions, to see the application maker information.)
        </Text>
           </ScrollView>
        </View>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        alignItems: 'center',
    backgroundColor: '#f6cd61',
  },
  welcome: {
    fontSize: 17,
    textAlign: 'center',
    margin: 1,
    color: 'black',
    width: '100%',
      fontWeight: 'bold',
    
  },
  instructions: {
    textAlign: 'left',
    color: 'black',
    
  },
  ViewImage:{
  
  
  },
  image:{
resizeMode: 'contain',
height: 150,
width: 700
  }
});