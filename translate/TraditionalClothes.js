import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight, Alert, Button } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/pakaianAdat/bajuAdatRaja.png'),
        require('../assets/pakaianAdat/BajuAdat1UntukMenyambutTamu.png'),
        require('../assets/pakaianAdat/BjuTariPoco2Pria.png'),
        require('../assets/pakaianAdat/BjuTariPoco2Wanita.png'),
      ]
    };
  }
   
  pressed = (text) => {
    Alert.alert("Traditional clothes",`
      Tepu behavior is generally bright and conspicuous as red, purple, dark yellow and dark green.
This type of clothing, in the past was made of fabric, kofo with two main raw materials are manila hennep fibers and bark fibers. To get the desired color, before stitching it must be dipped in liquid juice of red for example, and certain leaves or roots that can produce a blue, green, yellow, or blood red color. But now, the presence of kofo cloth has been replaced with various other materials suitable for long clothes. But the colors used are still based on previous traditions, namely bright and striking colors.
One thing that is quite important and can distinguish one ceremony from another is the completeness of clothing. In this case the wedding ceremony is a moment that can show the complete traditional clothing of the Sangir-Talaud region.
      The traditional groom's attire consists of long pants and tepu behavior that extends to the knees or soles of the feet, on either side of the shirt there is a hemisphere whose height reaches the hips, the collar of the shirt is round and split at the front, and long-sleeved. The outfits worn by the groom include a long necklace or soko u wanua, a keris (clothing) tucked in the right waist, a belt or salikuku made of cloth with a knot tied to the left of the waist, and a triangular headband.
Especially for headbands, the towering part is placed in front of the head. The ends are tied behind the head`,
    [
      {
        text: 'watch',
        onPress: () => Linking.openURL('https://www.youtube.com/')
      },
      {},
      {backlabel: false}
    ]);
  }
  
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.boxheaderText}>
         <Text style={styles.headerText}>TALAUD TRIBAL PACT</Text>
      </View>
        <View style={styles.box}>
          <SliderBox
          style={styles.imageBox}
          images={this.state.images}
          onCurrentImagePressed={() => this.pressed()}
          />
          
        </View>
        <View style={styles.bodyText}>
              <Text
              style={styles.textBody}>
                press image to read more info...
              </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  box:{
    flex:1,
    width: '100%',
    height: 600,
    justifyContent: 'center',


  },
  imageBox: {
  
    width: '100%',
    height: 800,
   alignItems: 'center',
   backgroundColor:'#f5f0e3',

  },
  button: {
    height: 10
  },
  // text
  boxheaderText:{
    backgroundColor:'#f6cd61',
    flex: 0.1,

  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'black'
  },
  bodyText:{
    flex:0.1,
    backgroundColor:'#f6cd61'
  },
  textBody:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  //button

  buttonText: {
    color: '#FFFFFF',
  },
});