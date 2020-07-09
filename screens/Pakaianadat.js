import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight,ScrollView, Alert, Button,Linking, Image } from "react-native";
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
    Alert.alert("Pakaian Adat",`
      Laku tepu pada umumnya berwarna terang dan mencolok se-perti merah, ungu, kuning tua, dan hijau tua. 
Baju jenis ini, pada zaman dulu terbuat dari kain ,kofo dengan dua bahan baku utamanya adalah serat manila hennep dan serat kulit kayu. Untuk mendapatkan warna yang diinginkan, sebelum dijahit harus dicelupkan ke dalam cairan air nira untuk warna merah misalnya, dan daun-daunan atau akar-akaran tertentu yang dapat menghasilkan warna biru, hijau, kuning, atau merah darah. Namun saat ini, keberadaan kain kofo telah digantikan dengan berbagai bahan lainnya yang sesuai untuk dibuat baju panjang. Namun warna yang dipakai masih tetap mengacu pada tradisi sebelumnya, yakni warna terang dan mencolok.
Satu hal yang cukup penting dan dapat membedakan upacara yang satu dengan yang lainnya adalah kelengkapan busana. Dalam hal ini upacara perkawinan merupakan satu momen yang dapat memperlihatkan busana adat daerah Sangir-Talaud secara lengkap.
      Busana adat pengantin pria terdiri atas celana panjang dan laku tepu yang panjangnya hingga lutut atau telapak kaki, di kanan kiri baju terdapat belahan yang tingginya mencapai pinggul, krah baju berbentuk bulat dan terbelah di bagian depannya, serta berlengan panjang. Kelengkapan busana yang dikenakan oleh pengantin pria meliputi kalung panjang atau soko u wanua, keris (sandang) yang diselipkan di pinggang sebelah kanan, ikat pinggang atau salikuku yang terbuat dari kain dengan simpul ikatan ditempatkan di sebelah kiri pinggang, dan ikat kepala berbentuk segitiga.
Khusus untuk ikat kepala, bagian yang menjulangnya diletakkan di bagian depan kepala. Adapun ujungnya diikatkan di belakang kepala      `,
    [
      {
        text: 'Lihat Vidio',
        onPress: () => Linking.openURL('https://www.youtube.com/')
      },
      {},
      {
        text: 'Kembali'
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
         <Text style={styles.headerText}>PAKAIAN ADAT SUKU TALAUD</Text>
      </View>
        <View style={styles.box}>
          <SliderBox
          style={styles.imageBox}
          images={this.state.images}
         /* onCurrentImagePressed={() => this.pressed()}*/
          />
          
        </View>
        <View style={styles.bodyText}>
          
              <View style={{textAlign: 'justify',  backgroundColor:'#f6cd61'}}>
               <Text
              style={styles.textBody}>
                Pakaian adat Sangihe Talaud merupakan pakaian tradisional yang biasa di kenakan oleh masyarkat etnis Sangihe dan Talud untuk keperluan Upacara adat yang disebut juga Tulude.
                Jenis pakaian adat yang di gunakan dalam ritual adat setempat umumnya di buat dari bahan serat kofo atau fami mannil yaitu sejenis pohon pisang yang banyak tumbuh di kawasan beriklim tropis seperti daerah Sangihe dan Talaud.
                adat perbedaan derajat kaum bangsawan dan masyarakat biasa, tapi tidak dapat membedakan  bentuk pakain adat yang di gunakan kaum laki-laki maupun perempuan dalam cara berbusana, seperti  pakaian adat yang di kenakan para kaum pria dalam upacar Tulude.
                Busana baju adat lengan panjang yang di gunakan sebagai lambang keagungan masyarakat sangihe dan Talaud.`
              </Text>
               <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.pressed('login')}>
            <Text style={styles.buttonText}>Selantujnya..</Text>
          </TouchableHighlight>

             <View style={{alignItems: 'center'}}>
             <Image source={require('../assets/pakaianAdat/bajuAdatRaja.png')} style={{width: 250, height:350,}}/>
              </View>
             <Text
              style={styles.textBody}>
               Baju adat Ratumbanua (Raja), ini biasanya digunakan pada saat perayaan penting seperti acara upacara adat, pesta rakyat, pesta pernikahan dan kegiatan dari pemerintahan. baju adat ini hanya bisa dipakai oleh seorang Ratumbanua(Raja) atau garis keturunanya...
              </Text>

             <View style={{alignItems: 'center'}}>
              <Image source={require('../assets/pakaianAdat/BajuAdat1UntukMenyambutTamu.png')} style={{width: 250, height:350}}/>
              </View>
             <Text
              style={styles.textBody}>
              Baju adat untuk penyambutan Tamu ini digunakan pada saat penjemputan tamu-tamu penting seperti gubernur, bupati dan tamu dari luar daerah yang memiliki status tinggi entah itu di pemerintahan maupun bangsawan ataupun tamu penting dari suatu organisasi...
              </Text>

             <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/pakaianAdat/BjuTariPoco2Pria.png')} style={{width: 250, height:350}}/>
                    </View>
              <Text
              style={styles.textBody}>
                Pakaian ini di gunakan pada saat ada acara adat, pesta pernikahan, pesta rakyat bahkan lomba tari. dimana dari semua acara dan pesta yang digelar biasanya, di adakan acara khusus untuk tarian Poco-Poco. Dan fungsi dari penari pria ini menuntun si penari wanita untuk berjoget...
              </Text>

              <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/pakaianAdat/BjuTariPoco2Wanita.png')} style={{width: 250, height:350}}/>
                    </View>
              <Text
              style={styles.textBody}>
                Pakaian adat ini di gunakan pada saat ada acara adat, pesta pernikahan, pesta rakyat bahkan lomba tari. dimana dari semua acara dan pesta yang digelar biasanya, di adakan acara khusus untuk tarian Poco-Poco.
              </Text>
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
    flex:0.1,
    backgroundColor:'#f6cd61'
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