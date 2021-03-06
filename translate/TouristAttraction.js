import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  Linking
} from 'react-native';
import { WebView } from 'react-native';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: "1", title: "Sara Island", tempat: "Kep.Talaud", image: "https://cdns.klimg.com/newshub.id/news/2017/07/09/136106/670x335-menikmati-keindahan-pulau-saraa-maladewa-indonesia-1707095.jpg", uri: 'https://www.youtube.com/watch?v=E7m6Ae_bqAg' },
        { id: "2", title: "Manee Cave", tempat: "Arangkaa, Kec. Gemeh, Kab. talaud islands.", image: "https://www.celebes.co/wp-content/uploads/2020/04/Gua-Batu-Kapal.jpg", uri: 'https://www.youtube.com/watch?v=glEtKheeFKk' },
        { id: "3", title: "Ampadoap Waterfall", tempat: "Beo, Kec. Beo, Kab. talaud islands.", image: "https://www.celebes.co/wp-content/uploads/2020/04/Air-Terjun-Ampadoap.jpg", uri: 'https://www.youtube.com/watch?v=tqlLo3HGJiI'},
        { id: "4", title: "Weta Cave", tempat: "Jl. Memohomane, Binalang, Kec. Talaud, Kab. talaud islands.", image: "https://www.celebes.co/wp-content/uploads/2020/04/Goa-Weta.jpg", uri: 'https://www.youtube.com/watch?v=E7m6Ae_bqAg' },
        { id: "5", title: "Lobo Beach", tempat: " Lobbo, di Kecamatan Beo Utara, Kab. talaud islands.", image: "https://www.celebes.co/wp-content/uploads/2020/04/Pantai-Lobbo.jpg", uri: 'https://www.youtube.com/watch?v=E7m6Ae_bqAg' },
        { id: "6", title: "Karakelang Island", tempat: "Bantane, Kec. Rainis, Kab. talaud islands.", image: "https://www.celebes.co/wp-content/uploads/2020/04/Pulau-Karakelang.jpg", uri: 'https://www.youtube.com/watch?v=4oiAJ4Sx8T4' },
        { id: "7", title: "Indigenous Village of Bannada", tempat: "Adat Bannada, Kec. Gemeh, Kab. talaud islands.", image: "https://www.celebes.co/wp-content/uploads/2020/04/Desa-Adat-Bannada.jpg", uri: 'https://www.youtube.com/watch?v=-JOD9ogm47k' },
        { id: "8", title: "Intata Island", tempat: "Festival Mane'e , Kec. Karatung, Kab. talaud islands ", image: "https://i.ytimg.com/vi/0MjAN57bIIo/hqdefault.jpg", uri: 'https://www.youtube.com/watch?v=0MjAN57bIIo' },
        { id: "9", title: "Miangas Island Border Indonesia Philippines", tempat: "Miangas, Kec. Miangas, Kab. talaud islands", image: "https://cdn2.boombastis.com/wp-content/uploads/2017/06/bandar-udara-Miangas.jpg", uri: 'https://www.youtube.com/watch?v=VTqIpFfykG4' },
      ]
    };
  }

  _onPressButton= (uri)=> {
    Linking.openURL(uri)
  }
 
 

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator} />
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity onPress={() => this._onPressButton(item.uri)}>
                <View style={styles.card}>
                   
                  <Image style={styles.cardImage} source={{ uri: item.image }} />
                  <Text>press picture to see video...</Text>
                  <View style={styles.cardContent}>

                    <View style={styles.cardtext}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.tempat}>{item.tempat}</Text>
                    </View>

                  </View>
                </View>
              </TouchableOpacity>
            )
          }} />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    backgroundColor: "#f6cd61",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card: {
    margin: 0,
    borderRadius: 2,
    borderWidth: 10,
    borderColor: "#f6cd61",
    backgroundColor: "#f6cd61",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    /********** overlay efect ******/
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage: {
    flex: 1,
    height: 300,
    width: null,
  },
  cardtext: {
    color: "red",
    flex: 1,

  },
  /******** card components **************/
  title: {
    fontSize: 22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight: 'bold'
  },
  tempat: {
    fontSize: 13,
    color: "#ffffff",
    marginTop: 5
  },
 
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "red",
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
