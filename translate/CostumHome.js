
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  FlatList
} from 'react-native';
import {SliderBox} from "react-native-image-slider-box";



export default class CompanyDescriptionView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/rumahAdat/rumahadat.jpg'),
        require('../assets/rumahAdat/rumah1.jpg'),
        require('../assets/rumahAdat/rumah2.jpg'),
        require('../assets/rumahAdat/rumah3.jpg'),
        require('../assets/rumahAdat/rumah4.jpg'),
        require('../assets/rumahAdat/rumah5.jpg'),
        require('../assets/rumahAdat/rumah6.jpg'),
        
      ]
    }
  }


   onClickListener = (text) => {
    Alert.alert("Custom home",`Sangihe tribal houses do not have rooms or rooms. Since the entry of Spain in the Sangihe islands, the Sangihe people have started to build houses with concrete construction using cement from burned corals. In the early Dutch colonial period, late 1700 to early 1800 the Sangihe had started using booths for house construction. The last ikat house was found in the village of Lehupu. Sangihe wooden house construction is a stage house.
      The house is built on a high pole, has a stairway to the house that is lifted at night. There is a large public porch and a living room that is as broad as the public porch. On the left and right there are bedrooms separated by wooden walls, bamboo or curtains .If one of the family members get married, the house will be connected at the back. The more people get married, the longer the house will be. This kind of house is occupied by 25 to 30 households. The construction of this house was last found on the islands of Nanusa. Many original houses Sangihe people experienced annihilation due to volcanic eruptions.
      After the passage of time and time simple building architecture began to stand firmly adjusting to civilization, using siri lime (Apu) as a binding agent for binding rock, and a large concrete pillar of siri as a adhesive for home support. Whereas round wood "sansuarran’na for frame (aso), roof frame from rattan leaves (nanga)," sago "sago leaves. to the architecture of the building of the tomb of kings. It is no wonder then the construction of buildings tends to be high, partly with a support pole of at least 100 cm, a maximum of 150 cm intended for; Healthy home standards, avoiding wild animal attacks, this affects the architecture of residential buildings and home buildings.
       `,
    
    [
      {
        text: 'watch',
        onPress: () => Linking.openURL('https://www.youtube.com/')
      },
      {
      
      },
      {backlabel: false}
    ]);
  }


  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.companyName}>TALAUD TRIBAL PACT </Text>
          <View style={styles.Box}>
            <SliderBox
            style={styles.image}
            images={this.state.images}
          />
          </View>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>At first the house is very simple.
               Based on the understanding of some of the Sangihe cultures that
               Sangihe's house is Pamangkonang.
               Then developed into a connective house.
               It is said to be a connective house because it does not use nails but is tied to rattan
            </Text>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
            <Text style={styles.buttonText}>Reads</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f6cd61',
  },
  image: {
    width: '100%',
    height: 800,
   
  },
  companyName: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
  },
  slogan: {
    fontSize: 18,
    fontWeight: '600',
    color: '#228B22',
    marginTop: 10,
  },
  descriptionContent: {
    padding: 30
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
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
  buttonText: {
    color: '#FFFFFF',
  },
  Box: {
      width: '100%',
      height: 800
  }
}); 