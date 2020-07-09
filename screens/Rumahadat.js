
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  FlatList,
    Linking
} from 'react-native';
import {SliderBox} from "react-native-image-slider-box";



export default class CompanyDescriptionView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/rumahAdat/RUMAH.png'),
        require('../assets/rumahAdat/rumah5.png'),
        require('../assets/rumahAdat/rumah6.png'),
        
      ]
    }
  }


  onClickListener = (text) => {
    Alert.alert("Rumah Adat",`Rumah suku sangihe tidak memiliki bilik atau kamar.Sejak masuknya spanyol di  kepulauan sangihe, orang sangihe  sudah  mulai  mendirikan  rumah dengan  konstruksi beton  menggunakann semen  dari  karang  yang dibakar. Di masa awal  kolonial  belanda  akhir  1700  sampai awal thn 1800  orang sangihe sudah  mulai  menggunakan  bilik  pada konstruksi  rumah. Rumah  ikat  terakhir  ditemukan  di  kampung Lehupu. Konstruksi  rumah  kayu   orang  sangihe adalah  rumah panggung.
      Rumah dibangun  diatas  tiang  tinggi, memiliki  tangga masuk kerumah yang diangkat  pada waktu  malam  hari.Terdapat  satu  serambi umum yang  luas dan  satu bilik tinggal  yang  sama  luasnya dengan serambi umum.Disebelah  kiri  dan  kanan  terdapat  bilik tidur  yang  dipisahkan  oleh dinding kayu, bamboo atau  tirai.Jika salah  satu  anggota  keluarga  menikah  maka rumah  akan disambung dibagian  belakang.Semakin  banyak  yang  menikah maka  akan  semakin  panjang  rumahnya.Rumah  seperti  ini ditempati  oleh 25 sampai 30 rumah tangga.Konstruksi  rumah sperti  ini  terakhir  ditemukan di pulau - pulau Nanusa.Banyak  rumah  asli  orang  sangihe  mengalami pemusnahan  akibat letusan  gunung  api.
      Setelah berjalannya masa dan waktu arsiterktur bangunan sederhanapun mulai berdiri kokoh menyesuaikan peradaban, dengan menggunakan kapur siri (Apu) sebagai bahan perekat pengikat batuan pundasi, dan tiang beton besar dari kapur siri sebagai bahan perekat untuk  penyangga rumah. Sedangkan  kayu bulat “sansuarran’na   untuk rangka (aso), rangka atap dari daun rotan  (nanga), daun rumbia “atup”.  sampai pada arsitektur bangunan  prasasti makam raja-raja. Tidaklah heran kemudian kontruksi banguan cenderung tinggi sebagian berkolong dengan tiang penyangga minimal 100 cm maxsimum 150 cm dimaksudkan untuk; Standar rumah sehat, menghindari serangan binatang buas, hal inilah mempengaruhi bentuk arsitektur bangunan rumah tinggal dan bangunan rumah.
       `,
    
    [
      {
       
      },
      {
      
      },{
        text : 'Kembali'
      },
      {backlabel: false}
    ]);
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.companyName}>Rumah Adat </Text>
          <View style={styles.Box}>
            <SliderBox
            style={styles.image}
            images={this.state.images}
          />
          </View>
          <Text style={styles.slogan}>Rumah adat sangihe talaud</Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>
              Pada  awalnya  bentuk rumah  sangat   sederhana.
              Berdasarkan pemahaman beberapa  budayaan  sangihe bahwa
              rumah  orang  sangihe  adalah  pamangkonang.
              Kemudian  berkembang menjadi  rumah  ikat.
              Dikatakan  rumah  ikat  karena  tidak menggunakan paku  tetapi diikat dengan  rotan
            </Text>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
            <Text style={styles.buttonText}>Selanjutnya..</Text>
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
      height: 800,
      borderRadius: 150
  }
}); 