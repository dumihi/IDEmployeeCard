import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

var { height, width } = Dimensions.get('window')


export class Picture extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource : null
    }
  }
  render () {
    return (
      <View style={{
        flex: 1,
        height: height / 2,
        width: width / 2,
        backgroundColor: '#d4e157',
        justifyContent: 'flex-end'
      }}>
          <Image
            style={styles.image}
            source={require('../../img/iconTakePicture.png')}
          />
          <Text style={styles.text}>PICTURE</Text>
          <View style = {{height: 60, width: width/2, opacity: 0.15,justifyContent: 'center', backgroundColor: 'green', marginTop:30}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: width / 2,
    flexDirection: 'row',
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9c27b0'
  },
  text: {
    width: 100,
    marginTop: 10,
    marginLeft: (width / 2 - 100) / 2,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: (width / 2 - 150) / 2,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
