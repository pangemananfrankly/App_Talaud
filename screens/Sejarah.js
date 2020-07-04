import React from 'react';
import { 
    Text, StyleSheet, View, ScrollView, Image, SafeAreaView, Button, TouchableOpacity, Linking, Alert } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import { FlatList } from 'react-native-gesture-handler';


const SejarahTalaud = () => {

   
const onClickListener = () => {
    Alert.alert("Tari Gunde",`Tari Gunde adalah tari tradisional etnis Sangihe-Talaud yang melukiskan ketulusan budi pekerti wanita. Tari ini pada mulanya adalah tari penyembahan ...`
        
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
    Alert.alert("Tari Bara",`Tari Bara'a mengkisahkan tentang Keberanian Masyarakat Talaud dalam medan perang untuk mempertahankan wilayahnya dari ancaman Perompak dan Penjajah.`
        
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
                        <Text style={styles.titleStory}>Daerah Kepulauan Talaud </Text>
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
-Letak Geografis Talaud`,
                                            content: ` 
    Terletak diantara Pulau Mindanao (Filipina) dan Pulau Sulawesi
    Kabupaten Kepulauan Talaud terbentuk berdasarkan Undang-Undang No. 8 Tahun 2002 yang merupakan hasil pemekaran Kabupaten Sangihe dan Talaud.
Ibu Kota : Melonguane
Luas wilayah : 1.288,94 km2
Jumlah Penduduk : 91.067 jiwa`
                                        },
                                        {
                                            key: '1',
                                            subtitle:` 
-Proses Terbentuknya Kepulauan Talaud`,
                                            content: `
    Kepulauan talaud terbentuk karena adanya pergesaran lempeng Halmahera dan lempeng sangihe. Kedua lempeng saling “bertabrakan” yang mengakibatkan lapisan permukaan bumi terangkat diatas permukaan laut. Hasil dari proses pangangkatan ini sejak zaman Pleistosen (1,6 juta-10.000) hingga zaman Holocen ditambah dengan kolonisasi oleh tumbuhan, binatang dan manusia serta interaksi diantaranya, terbentuklah Kepulauan talaud.`
                                        },
                                       {
                                            Key:'2',
                                            subtitle: `     Kepulauan Talaud adalah gugusan pulau-pulau yang berada di utara Indonesia dan berbatasan dengan Negara Filipina. Sebelah selatan berbatasan dengan laut maluku, laut Sulawesi disebelah barat, Samudera Pasifik ditimur yang terdiri dari 20 pulau yaitu pulau Karakelang (terbesar), Mangaran, Salibabu, Miangas, Marampit, Karatung, Kakorotan dan pulau – pulau tidak berpenghuni lainnya dengan Luas wilayah secara keseluruhan adalah 27.061,16 km2 yang terdiri dari dari daratan seluas 1.288,94 km2 dan lautan seluas 25.772,22 km2.`
                                        },
                                        {
                                            Key:'3',
                                            subtitle:`
- Proses Terbentuknya Kepulauan Talaud `,
                                            content: `
    Kepulauan talaud terbentuk karena adanya pergesaran lempeng Halmahera dan lempeng sangihe. Kedua lempeng saling “bertabrakan” yang mengakibatkan lapisan permukaan bumi terangkat diatas permukaan laut. Hasil dari proses pangangkatan ini sejak zaman Pleistosen (1,6 juta-10.000) hingga zaman Holocen ditambah dengan kolonisasi oleh tumbuhan, binatang dan manusia serta interaksi diantaranya, terbentuklah Kepulauan talaud.`
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
                        <Text style={styles.titleStory}>Cerita Rakyat Talaud</Text>
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
    Talaud atau taloda disebut juga dengan nama “Porodisa” atau Paradise yang berarti surga. Menurut cerita ketika bangsa Portugis datang pertama kali ke talaud mereka berkata “Paradise” karena dilihatnya talaud bagaikan surga, tapi penduduk lokal waktu itu mengucapkannya “porodisa” karena tidak dapat mendengar dan melafazkannya dengan baik dan juga tidak mengerti artinya.
       Sedangkan Taloda berasal dari kata Talo dan Oda. Talo adalah nama orang yang berasal dari talaud sedangkan Oda adalah istrinya yang berasal dari pulau Mindanau (Filipina), Taloda menjadi nama dari keturunan mereka berdua.`
                                        },
                                         {
                                            key:'1',
                                            subtitle:`
    Petunjuk ataupun bukti-bukti tentang kerajaan talud sangat sedikit, namun yang pasti di talaud telah berdiri kerajaan sejak jaman Majapahit. Dalam syair Prapanca pada kitab negarakartagama pada zaman gajah mada (1364), Talaud disebut sebagai udamakatrayadi atau udamakatraya. `
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
                        <Text style={styles.titleStory}>Bahasa dan Suku Talaud </Text>
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
Suku Talaud`,
                                            content: ` 
    merupakan suku yang menempati gugusan pulau-pulau Talaud kawasan Kepulauan Sangir, Kabupaten Talaud, Provinsi Sulawesi Utara. Kabupaten Kepulauan Talaud merupakan salah satu kabupaten terluar dari negara Indonesia, yang terletak di wilayah perbatasan negara Indonesia dengan Filipina. Berdasarkan fakta sejarah dahulu kala Suku Talaud memiliki keterbukaan akan hadirnya bangsa lain dari peran terhadap kepulauan lintasan perdagangan antar bangsa-bangsa pada kawasan utara menuju ke selatan dunia. Kawasan mereka ini memiliki tiga pulau pusat, yakni Pulau Karakelang, Salibabu dan Kabaruan. Istilah lain dari Talaud yakni Taloda, yang mempunyai makna "orang laut". Ada pula yang menyebut sebagai Porodisa.`
                                        },
                                        {
                                            key: '1',
                                            subtitle:` 
Bahasa Suku Talaud`,
                                            content: `
    Bahasa Talaud memiliki enam dialek, yakni Sali-Babu, Karakelang, Essang, Nanusa, Miangas, dan Kabaruan. Bahasa ini pula terdapat tingkatan bahasa halus, menengah, dan kasar. Sebagian besar Suku Talaud memakai bahasa Melayu Manado dalam berbahasa sehari-hari.`
                                        },
                                        {
                                            key: '2',
                                            subtitle: `
Adat Istiadat Suku Talaud`,
                                            content: `
    Kehidupan suku Talaud memiliki berbagai aturan-aturan maupun norma-norma yang telah ada hingga saat ini, dari yang bersumber secara aturan-aturan formal, maupun aturan-aturan adat, atau aturan-aturan agama. Hal tersebut tercermin akan kehidupan suku Talaud yang melakukan upacara adat yang berhubungan dengan lingkaran daur hidup ataupun yang memiliki hubungan sistem mata pencaharian, kesenian, sistem peralatan, dan lain sebagainnya. Kelestarian peraturan adat di suku Talaud masih terjaga. Hal ini, maka keseluruh komponen masyarakat dan para pemimpin, pemerintah maupun yang menjabat sebagai aparat, ataupun tokoh-tokoh adat yang telah dipercayai, memiliki kewajiban dalam berperan aktif untuk kelestarian adat istiadat suku Talaud. \
Pimpinan adat suku Talaud memiliki kewajiban dalam menjaga keutuhan kesinambungan adat istiadat yang berperan dalami fungsi pelindungan adat-istiadat, pelaksanaan pengawasan dan kontrol sosial masyarakat suku Talaud yang mungkin terdapat kasus pelanggaran suatu aturan di suku Talaud. Secara fungsi hal ini pimpinan adat tidak bisa dijabat oleh sembarang orang, hanya orang-orang yang diyakini atau dipercaya dalam memimpin adat suku Talaud. Pimpinan adat ini harus memiliki sifat yang patut diteladani dalam kehidupan sehari-hari, sebagai panutan warga. Suku Talaud memiliki hubungan kekerabatan yang bilateral sifatnya.`
                                        },{
                                         key:'3',
                                            subtitle:`
Asal-usul orang Talaud`,
                                            content:`
    Mengenai asal-usul Orang Talaud tidak dapat diketahui secara pasti, ada yang berpendapat bahwa orang talaud berasal dari Filipina karena mempunyai kemiripan bahasa dan warna kulit serta bentuk tubuh, ada yang menyebutkan bahwa suku talaud termasuk bangsa Melayu Polinesia yang merupakan bagian dari Austronesia. Berdasarkan penelitian, kepulauan talaud telah dihuni sekitar ± 6.000 tahun SM.
Kita juga dapat mengetahui asal-usul orang Talaud berdasarkan cerita rakyat, seperti yang disebutkan diatas Talo dan Oda adalah manusia pertama ditalaud. Cerita lain adalah Hikayat yang berjudul “Alamona Otaumata Ntaloda” (manusia pertama ditalaud).
Cerita lain juga mengatakan tentang asal usul orang talaud berasal dari Filipina selatan. Dikisahkan tiga orang yaitu Gumansalangi dan istrinya Kondawulaeng bersama Bawanulare berlayar ketimur. Ketika sampai di pulau Sangir, Gumansalangi dan istrinya Kondawulaeng tidak berlayar dan menetap disana, sedangkan Bawanulare tetap melanjutkan pelayaran sampai di Pulau Kabaruan.`
                                    
                                        }
                                    ]}
                                    renderItem={({item}) => <Text style={styles.textStyle}> { item.subtitle }, {item.content} </Text> }>


                               </FlatList>
                                <Text style={{fontSize: 30, textAlign:'center',fontWeight:'bold'}}>
                                Tarian Adat</Text>

                                <Text style={{fontSize: 24}}>Tari Bara</Text>
                                <View style={{alignItems:'center'}}> 
                                <TouchableOpacity  onPress={onClickListener2}>
                                <Image source={require('../assets/tari/tari_bara.jpg')}/>
                                </TouchableOpacity>
                                <Text>press picture to see video...</Text>
                                </View>

                                <Text style={{fontSize: 24}}>Tari Gunde</Text>
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

export default SejarahTalaud;

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

