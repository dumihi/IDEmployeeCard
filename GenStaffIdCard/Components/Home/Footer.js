import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native'
var { height, width } = Dimensions.get('window')

export class Footer extends Component {
  render () {
    return (
      <View style={styles.footer}>
        <Image
          style={styles.imageIcon}
          source={require('../../img/menu.png')}
        />
        <Text style={styles.text}>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    width: width,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#80d6ff'
  },
  text: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    paddingTop: 15,
    marginLeft: (width-60)/2 - 60,
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageIcon: {
    marginTop: 15,
    marginLeft: 10,
    width: 50,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
})
