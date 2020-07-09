import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight,ScrollView, Alert, Button,Linking, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/pakaianAdat/BajuAdatRajaEnglish.png'),
        require('../assets/pakaianAdat/BajuAdat1English.png'),
        require('../assets/pakaianAdat/BjuTariPoco2PriaEnglish.png'),
        require('../assets/pakaianAdat/BjuTariPoco2WanitaEnglish.png'),
      ]
    };
  }
   
  pressed = (text) => {
    Alert.alert("Custom Clothing ",`
      Tepu behavior is generally bright and conspicuous as red, purple, dark yellow and dark green.
This type of clothing, in the past was made of fabric, kofo with two main raw materials are manila hennep fibers and bark fibers. To get the desired color, before stitching must be dipped in liquid juice of red for example, and certain leaves or roots that can produce a blue, green, yellow, or blood red color. But now, the presence of kofo cloth has been replaced with various other materials suitable for long clothes. But the colors used are still based on previous traditions, namely bright and striking colors.
One thing that is quite important and can distinguish one ceremony from another is the completeness of clothing. In this case the wedding ceremony is a moment that can show the complete traditional clothing of the Sangir-Talaud region.
      The traditional groom's attire consists of long pants and tepu behavior that extends to the knees or soles of the feet, on either side of the shirt there is a hemisphere that reaches the hips high, the collar of the shirt is round and split at the front, and long-sleeved. The outfits worn by the groom include a long necklace or soko u wanua, a keris (clothing) tucked in the right waist, a belt or a salikuku made of cloth with a knot tied to the left of the waist, and a triangular headband.
Especially for headbands, the towering part is placed in front of the head. The ends are tied behind the head `,
    [
      {
        text: 'Play Video',
        onPress: () => Linking.openURL('https://www.youtube.com/')
      },
      {},
      {
        text: 'Back'
      },
      {backlabel: false}
    ]);
  }




  render() {
    return (
      <View style={styles.container}>
      <View style={{width: 470, height: 880,backgroundColor:'#f6cd61',}}>
      <ScrollView style={{ height: "100%", width: '100%'}}>
      <View style={styles.boxheaderText}>
         <Text style={styles.headerText}>TALAUD TRIBE CLOTHES</Text>
      </View>
        <View style={styles.box}>
          <SliderBox
          style={styles.imageBox}
          images={this.state.images}
         /* onCurrentImagePressed={() => this.pressed()}*/
          />
          
        </View>
        <View style={styles.bodyText}>
            <View style={{fle1: 1, width: 450, justifyContent:'center'}}>
          <View style={{textAlign: 'justify',  backgroundColor:'#f6cd61'}}>
               <Text
              style={styles.textBody}>
               Sangihe Talaud traditional clothing is traditional clothing that is commonly worn by Sangihe and Talud ethnic communities for the purpose of traditional ceremonies called Tulude.
                 The type of traditional clothes used in local traditional rituals are generally made from kofo fiber or fami mannil which is a type of banana tree that grows in tropical regions such as Sangihe and Talaud.
                 adat differences in the degree of aristocracy and ordinary people, but can not distinguish the form of custom clothing used by men and women in the way of dress, such as traditional clothing worn by men in the Tulude ceremony.
                 Long-sleeved traditional clothing that is used as a symbol of the greatness of the Sangihe and Talaud people`
              </Text>
               <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.pressed('login')}>
            <Text style={styles.buttonText}>Next..</Text>
          </TouchableHighlight>

             <View style={{alignItems: 'center'}}>
             <Image source={require('../assets/pakaianAdat/BajuAdatRajaEnglish.png')} style={{width: 250, height:350,}}/>
              </View>
             <Text
              style={styles.textBody}>
               Ratumbanua (King) traditional clothes, are usually used during important celebrations such as traditional ceremonies, folk parties, weddings and government activities. This traditional dress can only be worn by a Ratumbanua (King) or his line ...
              </Text>

             <View style={{alignItems: 'center'}}>
              <Image source={require('../assets/pakaianAdat/BajuAdat1English.png')} style={{width: 250, height:350}}/>
              </View>
             <Text
              style={styles.textBody}>
             The traditional dress for welcoming guests is used when picking up important guests such as governors, regents and guests from outside areas that have high status whether in government or aristocrats or important guests from an organization ...
              </Text>

             <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/pakaianAdat/BjuTariPoco2PriaEnglish.png')} style={{width: 250, height:350}}/>
                    </View>
              <Text
              style={styles.textBody}>
               This clothing is used when there are custom events, weddings, folk parties and even dance competitions. where of all the events and parties that are usually held, a special event is held for the Poco-Poco dance. And the function of this male dancer guides the female dancer to dance ....
              </Text>

             <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/pakaianAdat/BjuTariPoco2WanitaEnglish.png')} style={{width: 250, height:350}}/>
                    </View>
              <Text
              style={styles.textBody}>
               This traditional clothing is used when there are custom events, weddings, folk parties and even dance competitions. where of all the events and parties that are usually held, a special event is held for the Poco-Poco dance.
              </Text>
              </View>
            </View> 

           </View>

        </ScrollView>
         </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:'center',
      backgroundColor:'#f6cd61'
  },
  box:{
    flex:1,
    width: '100%',
    height: 800,
    justifyContent: 'center',
    borderRadius: 15


  },
  imageBox: {
  
    width: '100%',
    height: 800,
   alignItems: 'center',
   backgroundColor:'#f5f0e3',
   borderRadius: 15
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
 
    backgroundColor:'#f6cd61',
    alignItems: 'center',
    

  },
  textBody:{
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    color: 'black',
  },
  //button

  buttonText: {
    color: '#FFFFFF',
  },
   buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
  },
    sendButton: {
    backgroundColor: "#1564bf",
  },
});