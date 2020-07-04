import React from 'react';
import { 
    Text, StyleSheet, View, ScrollView, Image, SafeAreaView, Button, TouchableOpacity, Linking, Alert } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import { FlatList } from 'react-native-gesture-handler';


const history = () => {

   
const onClickListener = () => {
    Alert.alert("Gunde Dance",`The Gunde dance is a traditional Sangihe-Talaud dance which depicts women's sincerity. This dance was originally a worship dance ...`
        
    ,[
      {
        text: 'watch',
        onPress: () => Linking.openURL('https://www.youtube.com/watch?v=YLZ9l1TDATQ')
      },
      {
      
      },
      {backlabel: false}
      ]);
}

const onClickListener2 = () => {
    Alert.alert("Bara Dance",`Tari Bara'a mengkisahkan tentang Keberanian Masyarakat Talaud dalam medan perang untuk mempertahankan wilayahnya dari ancaman Perompak dan Penjajah.`
        
    ,[
      {
        text: 'watch',
        onPress: () => Linking.openURL('https://www.youtube.com/watch?v=2Heq_pUqOoQ')
      },
      {
      
      },
      {backlabel: false}
      ]);
}

    return (

        
            <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>
                <View style={styles.bodyView}>
                    <View style={styles.titileBody} >
                        <Text style={styles.titleStory}>Talaud Islands Region</Text>
                    </View>
                   
                    <View style={styles.imageBingkai}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Sejarah/Sangihe1.png')}
                        />
                    </View>
                    <View style={styles.body}>
                                  <Text style={styles.textStyle}></Text>
                                <FlatList
                                    data={[
                                        {
                                            key : '0',
                                            subtitle:`
Talaud's geographical location`,
                                            content: ` 
   Located between Mindanao Island (Philippines) and Sulawesi Island
     Talaud Islands Regency was formed based on Law No. 8 of 2002 which is the result of the expansion of Sangihe and Talaud Regencies.
Capital City: Melonguane
Total area: 1,288.94 km2
Total Population: 91,067 inhabitants`
                                        },
                                        {
                                            key: '1',
                                            subtitle:` 
-The process of forming the Talaud Islands`,
                                            content: `
   Talaud Islands were formed due to the shifting of the Halmahera Plate and the Sangihe Plate. The two plates collide with each other which causes the surface layer of the earth to rise above the sea level. The results of this process of departure from the Pleistocene era (1.6 million-10,000) until the Holocen era were added to the colonization by plants, animals and humans and interactions between them, forming the Talaud Islands.`
                                        },
                                       {
                                            Key:'2',
                                            subtitle: `    The Talaud Islands are a group of islands located in the north of Indonesia and bordered by the Philippines. The south is bordered by the Maluku sea, the Sulawesi sea in the west, the Pacific Ocean in the east which consists of 20 islands, namely Karakelang (largest), Mangaran, Salibabu, Miangas, Marampit, Karatung, Kakorotan and other uninhabited islands with a total area of the whole is 27,061.16 km2 consisting of land area of 1,288.94 km2 and sea area of 25,772.22 km2.`                                        },
                                        {
                                            Key:'3',
                                            subtitle:`
- The process of forming the Talaud Islands`,
                                            content: `
  Talaud Islands were formed due to the shifting of the Halmahera Plate and the Sangihe Plate. The two plates collide with each other which causes the surface layer of the earth to rise above the sea level. The results of this process of departure from the Pleistocene era (1.6 million-10,000) until the Holocen era were added to the colonization by plants, animals and humans and interactions between them, forming the Talaud Islands.`
                                        },
                                       


                                    ]}
                                    renderItem={({item}) => <Text style={styles.textStyle}> { item.subtitle }, {item.content} </Text> }>

                                </FlatList>
                                <Text style={styles.textStyle}>
                       
                             </Text>
                        </View>
                    </View>



                     <View style={styles.bodyView}>
                    <View style={styles.titileBody} >
                        <Text style={styles.titleStory}>Talaud Folklore</Text>
                    </View>
                      <View style={styles.imageBingkai}>
                        <Image
                            style={styles.image}
                            source={require('../assets/sejarah2.jpg')}
                        />
                    </View>
                                        <View style={styles.body}>
                                  <Text style={styles.textStyle}>
                            
                                </Text>
                                <FlatList
                                    data={[
                                        {
                                            key : '0',
                                            subtitle: `
   Talaud or taloda is also called "Porodisa" or Paradise which means heaven. According to the story when the Portuguese first came to talaud they said "Paradise" because he saw talaud as heaven, but the local people said it "porodisa" because they could not hear and pronounce it well and also did not understand its meaning.
        While Taloda comes from the words Talo and Oda. Talo is the name of a person who came from talaud while Oda is his wife who came from the island of Mindanau (Philippines), Taloda became the name of their descendants.`
                                        },
                                         {
                                            key:'1',
                                            subtitle:`
   Instructions or evidence about the kingdom of talud is very little, but certainly in talaud has stood the kingdom since the Majapahit era. In the Prapanca verse in the book of the state of religion in the time of the elephant mada (1364), Talaud is referred to as udamakatrayadi or udamakatraya.`
                                        },
                                        
                                    ]}
                                    renderItem={({item}) => <Text style={styles.textStyle}> { item.subtitle }, {item.content} </Text> }>

                                </FlatList>
                                <Text style={styles.textStyle}>
                       
                             </Text>
                        </View>
                    </View>


                     <View style={styles.bodyView}>
                    <View style={styles.titileBody} >
                        <Text style={styles.titleStory}>Talaud language and tribe </Text>
                    </View>
                      <View style={styles.imageBingkai}>
                        <Image
                            style={styles.image}
                            source={require('../assets/Sejarah/masyarakat.jpg')}
                        />
                    </View>
                                        <View style={styles.body}>
                                  <Text style={styles.textStyle}>
                            
                                </Text>
                                <FlatList
                                    data={[
                                        {
                                            key : '0',
                                            subtitle:`
Talaud tribe`,
                                            content: ` 
   is a tribe that occupies the Talaud islands in the Sangir Islands region, Talaud Regency, North Sulawesi Province. Talaud Islands Regency is one of the outermost regencies of the country of Indonesia, which is located in the border region of the country of Indonesia with the Philippines. Based on historical facts long ago the Talaud tribe had an openness to the presence of other nations from their role in the archipelago of trade trails between nations in the north to the south of the world. Their area has three central islands, namely Karakelang Island, Salibabu and Kabaruan. Another term from Talaud is Taloda, which means "sea people". There is also a mention as Porodisa.`
                                         },
                                        {
                                            key: '1',
                                            subtitle:` 
Talaud tribe language`,
                                            content: `
   The Talaud language has six dialects, namely Sali-Babu, Karakelang, Essang, Nanusa, Miangas, and Kabaruan. This language also has subtle, intermediate and coarse language levels. Most of the Talaud tribe uses the Malay language of Manado in everyday language`
                                        },
                                        {
                                            key: '2',
                                            subtitle: `
Custom Talaud Tribe`,
                                            content: `
  The life of the Talaud tribe has a variety of rules and norms that have existed until now, from those originating from formal rules, as well as traditional rules, or religious rules. This is reflected in the life of the Talaud tribe who perform traditional ceremonies related to life cycle circles or those who have a livelihood system, arts, equipment system, and so on. Sustainability of customary regulations in the Talaud tribe is still maintained. This, then all components of the community and leaders, the government and those who serve as apparatus, or traditional leaders who have been trusted, have an obligation to play an active role in the preservation of Talaud customs. \
Talaud tribal leaders have an obligation to maintain the integrity of the customs that play a role in the function of protecting customs, carrying out supervision and social control of the Talaud tribe, which may be a case of violation of rules in the Talaud tribe. Functionally, this customary leader cannot be held by just anyone, only those who are believed or trusted in leading the custom of the Talaud tribe. This traditional leader must have exemplary qualities in daily life, as a role model for citizens. The Talaud tribe has bilateral relations`
                                        },{
                                         key:'3',
                                            subtitle:`
The origin of the Talaud people`,
                                            content:`
   Regarding the origin of the Talaud people can not be known with certainty, there are those who think that the talaud originated from the Philippines because they have similar language and skin color and body shape, there is a mention that the talaud tribe includes Polynesian Malays which are part of Austronesian. Based on research, talaud islands have been inhabited around ± 6,000 BC.
We can also find out the origin of the Talaud people based on folklore, as mentioned above Talo and Oda were the first humans in talaud. Another story is Tell, entitled "Alamona Otaumata Ntaloda" (the first man in tunala).
Another story also tells of the origin of the talaud people from the southern Philippines. Narrated three people namely Gumansalangi and his wife Kondawulaeng with Bawanulare sailed east. When he arrived at Sangir Island, Gumansalangi and his wife Kondawulaeng did not sail and settled there, while Bawanulare continued their voyage to Kabaruan Island.`
                                    
                                        }
                                    ]}
                                    renderItem={({item}) => <Text style={styles.textStyle}> { item.subtitle }, {item.content} </Text> }>


                               </FlatList>
                                <Text style={{fontSize: 30, textAlign:'center',fontWeight:'bold'}}>
                               Traditional dance</Text>

                                <Text style={{fontSize: 24}}>Bara dance</Text>
                                <View style={{alignItems:'center'}}> 
                                <TouchableOpacity  onPress={onClickListener2}>
                                <Image source={require('../assets/tari/tari_bara.jpg')}/>
                                </TouchableOpacity>
                                 <Text>press picture to see video...</Text>
                                </View>

                                <Text style={{fontSize: 24}}>Gunde dance</Text>
                                <View style={{alignItems:'center'}}> 
                                <TouchableOpacity  onPress={onClickListener}>
                                <Image source={require('../assets/tari/tari_gunde.jpg')}/>
                                
                                </TouchableOpacity>
                                <Text>press picture to see video...</Text>
                                </View>
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    
          
    );
};

export default history;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    body: {
        flex: 1,
        backgroundColor: '#f6cd61',
        height:' 50%'
    },
    scrollView: {
        backgroundColor: '#f6cd61',
        marginHorizontal: 10,
    },
    titleStory: {
       marginVertical: 12,
        fontWeight: 'bold',
        fontSize: 21,
        backgroundColor:'#f6cd61'
    },
    titileBody: {
        flex: 1,
        backgroundColor: '#f6cd61',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 16,
        color: 'black',
        textAlign: 'justify'
    },
    title: {
        fontSize: 18,
        flex: 1,
    },
    bodyView: {
        
    },
      image: {
          marginVertical: 12,
        width: '96%', height: 400,
        
    },
    imageBingkai: {
        flex: 1,
        backgroundColor: '#f6cd61',
        width: '100%', height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }

});

